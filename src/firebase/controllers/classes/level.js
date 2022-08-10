import { Controller } from "../main";

import Class from "./class";

/*

    title,
    color,
    weight -> higher weight = higher ranking,

*/

let Level = new Controller("levels");

Level.getClasses = async function (id) {
  return await Class.findAll({ where: ["levelId", "==", id] });
};

export default Level;
