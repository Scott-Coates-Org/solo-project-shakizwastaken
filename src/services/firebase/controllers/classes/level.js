import { Controller } from "../main";

import Class from "./class";

/*

    title,
    color,
    weight -> higher weight = higher ranking,

*/

let Level = new Controller("levels");

Level.createLevel = async function ({
  title,
  shortVersion,
  color,
  weight,
  createdBy,
}) {
  const createdAt = new Date();

  return await this.createOne(
    { title, shortVersion, color, weight, createdBy, createdAt },
    { raw: true }
  );
};

Level.getClasses = async function (id) {
  return await Class.findAll({ where: ["levelId", "==", id] });
};

export default Level;
