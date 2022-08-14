import "./classesDropdown.css";

import { useEffect } from "react";
import { useState } from "react";

import Level from "../../../../../../../../services/firebase/controllers/classes/level";

const SchoolClassesDropdown = ({ register }) => {
  const [loading, setLoading] = useState(true);
  const [levels, setLevels] = useState([]);

  const getLevels = async () => {
    setLoading(true);
    const levels = await Level.getAllLevels();
    setLevels(levels);
    setLoading(false);
  };

  useEffect(() => {
    getLevels();
  }, []);

  const renderOptions = () =>
    levels
      .sort((a, b) => a.weight - b.weight)
      .map(({ id, title, classes }) => (
        <optgroup key={id} label={title}>
          {classes.length ? (
            classes.map(({ id, title }) => (
              <option key={id} value={id}>
                {title}
              </option>
            ))
          ) : (
            <option value={null}>No class found for this level</option>
          )}
        </optgroup>
      ));

  return (
    <select className="school_classes_dropdown" {...register("classId")}>
      {renderOptions()}
    </select>
  );
};

export default SchoolClassesDropdown;
