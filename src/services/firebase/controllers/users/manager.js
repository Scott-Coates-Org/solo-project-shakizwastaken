import { Controller } from "../main";
import User from "./user";

/*

    

*/

let Manager = new Controller("managers");

Manager.registerManager = async function (userData, managerData) {
  return await User.registerUser({ ...userData, role: "MANAGER" }, (userId) => {
    return { ...managerData, userId };
  });
};

export default Manager;
