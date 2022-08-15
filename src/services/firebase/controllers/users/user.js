import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../client";
import { Controller } from "../main";

import Instructor from "./instructor";
import Manager from "./manager";
import Student from "./student";
/*
    photoUrl,
    email,
    address,
    phone number,
    role ,
    joined since,

*/

let User = new Controller("users");

User.getStudent = async function (id) {
  const studentsArr = await Student.findAll({
    where: ["userId", "==", id],
    raw: true,
  });
  return studentsArr?.[0];
};

User.getManager = async function (id) {
  const managersArr = await Manager.findAll({
    where: ["userId", "==", id],
    raw: true,
  });

  return managersArr?.[0];
};

User.getInstructor = async function (id) {
  const instructorsArr = await Instructor.findAll({
    where: ["userId", "==", id],
    raw: true,
  });

  return instructorsArr?.[0];
};

User.registerUser = async function ({ password, ...data }, getEntityData) {
  const { email, role } = data;

  const joinedAt = new Date();
  const lastLogin = new Date();

  //check if email already being used
  const emailCheck = await User.findAll({
    raw: true,
    where: ["email", "==", email],
  });
  if (emailCheck.length !== 0) throw new Error("email already used");

  if (!email) throw new Error("please provide an email and password");

  //did not provide user role
  if (!role) throw new Error("please provide a user role");

  // const authUser = await adminAuth.createUser({
  //   email,
  //   password,
  // });

  let userDoc = await this.createOne(
    {
      ...data,
      joinedAt,
      lastLogin,
    },
    {}
  );

  let user = { ...userDoc.data() };

  //initial data for ref entity
  const entityData = getEntityData(userDoc.id);

  if (role === "STUDENT") {
    user.student = await Student.createOne(entityData, { raw: true });
  }
  if (role === "INSTRUCTOR")
    user.instructor = await Instructor.createOne(entityData, { raw: true });
  if (role === "MANAGER")
    user.manager = await Manager.createOne(entityData, { raw: true });

  return user;
};

User.authUser = async function ({ email, password }) {
  if (!password || !email)
    throw new Error("please input an email and password");

  const userArr = await this.findAll({
    where: ["email", "==", email],
    raw: true,
  });

  if (userArr !== 1) throw new Error("email and password not matching");

  const { password: userPassword, ...data } = userArr[0];

  //wrong password
  if (userPassword !== password)
    throw new Error("email and password not matching");

  return data;
};

User.getUserFromEmail = async function (email) {
  if (!email) throw new Error("please provide an email");

  let user = await User.findOne({
    where: ["email", "==", email],
  });

  if (!user) return undefined;

  const { id, role } = user;

  let child = {};

  if (role === "STUDENT") child.student = await this.getStudent(id);
  if (role === "MANAGER") child.manager = await this.getManager(id);
  if (role === "INSTRUCTOR") child.instructor = await this.getInstructor(id);

  return { ...user, ...child };
};

User.onUserUpdate = async function (id, fn) {
  const userRef = doc(db, "/users", id);
  onSnapshot(userRef, () => {
    fn();
  });
};

export default User;
