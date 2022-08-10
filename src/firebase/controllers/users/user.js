import { Controller } from "../main";
import Instructor from "./instructor";
import Manager from "./manager";
import Student from "./student";
/*
    photoUrl,
    email,
    password -> can be null if auth done through some provider,
    address,
    phone number,
    role ,
    joined since,

*/

let User = new Controller("users");

User.getStudent = async function (id) {
  const studentArr = await Student.findAll({
    where: ["userId", "==", id],
    raw: true,
  });

  return studentArr;
};

User.getManager = async function (id) {
  const managerArr = await Manager.findAll({
    where: ["userId", "==", id],
    raw: true,
  });

  return managerArr;
};

User.getInstructor = async function (id) {
  const studentArr = await Instructor.findAll({
    where: ["userId", "==", id],
    raw: true,
  });

  return studentArr;
};

User.registerUser = async function (data, getEntityData) {
  const { photoUrl, email, provider, password, address, phoneNumber, role } =
    data;

  const joinedAt = new Date();
  const lastLogin = new Date();

  //check if email already being used
  const emailCheck = await User.findAll({
    raw: true,
    where: ["email", "==", email],
  });
  if (emailCheck.length !== 0) throw new Error("email already used");

  if (!email && !provider)
    //using email/password login but didnt provide password
    throw new Error("please provide an email and password");

  //did not provide user role
  if (!role) throw new Error("please provide a user role");

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

export default User;
