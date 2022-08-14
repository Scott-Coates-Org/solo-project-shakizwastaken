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
  return await Class.findAll({ where: ["levelId", "==", id], raw: true });
};

Level.getAllLevels = async function () {
  const levels = await this.findAll({ raw: true });
  return Promise.all(
    levels.map(async (level) => {
      const classes = await this.getClasses(level.id);
      return { ...level, classes };
    })
  );
};

export default Level;
