import "./class.css";

import { useGetOne } from "../../../../../../../services/firebase/hooks/useGetOne";
import Level from "../../../../../../../services/firebase/controllers/classes/level";
import Button from "../../../../../../../components/ui/button/Button";
import { useNavigate } from "react-router-dom";

const SchoolClass = ({ id, title, levelId, createdBy }) => {
  const [level, isLoading] = useGetOne({
    controller: Level,
    id: levelId,
  });

  //destructuring level data
  const {
    title: lvlTitle,
    shortVersion: lvlShortVersion,
    color: lvlColor,
    createdBy: lvlCreatedBy,
    weight: lvlWeight,
  } = level;

  const navigate = useNavigate();

  return (
    <div className="school_viewClasses_class">
      <div className="school_viewClasses_class_classInfo">
        <h1>{title}</h1>
      </div>
      <div className="school_viewClasses_class">
        <div
          className={`school_viewClasses_class_lvlTag`}
          style={{ background: lvlColor }}
        >
          {lvlShortVersion}
        </div>
      </div>

      <Button
        className="school_viewClasses_class_editScheduleBtn"
        onClick={() => {
          navigate(`/school/class/id/${id}/schedule/edit`);
        }}
      >
        Edit Schedule
      </Button>
    </div>
  );
};

export default SchoolClass;
