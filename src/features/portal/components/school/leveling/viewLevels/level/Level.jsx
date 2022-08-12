import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./level.css";

const Level = ({ title, shortVersion, color, provided }) => {
  return (
    <div
      className="viewLevels_level"
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <FontAwesomeIcon className="viewLevels_level_dragIcon" icon={faBars} />
      <h1 className="viewLevels_level_title">{title}</h1>
      <h1 className="viewLevels_level_abr" style={{ background: color }}>
        {shortVersion}
      </h1>

      {/* level menu drop */}
    </div>
  );
};

export default Level;
