import "./dataStats.css";

import ClassesCountCard from "./classesCount/Card";
import InstructorsCountCard from "./instructorsCount/Card";
import StudentsCountCard from "./studentsCount/Card";

const ManagerDashboardDataStats = () => {
  return (
    <div className="manager_Dashboard_DataStats_container">
      <StudentsCountCard />
      <InstructorsCountCard />
      <ClassesCountCard />
    </div>
  );
};

export default ManagerDashboardDataStats;
