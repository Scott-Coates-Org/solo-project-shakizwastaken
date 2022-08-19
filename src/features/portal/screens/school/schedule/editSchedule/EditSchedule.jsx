import "./editSchedule.css";

import RoleAuthorization from "../../../../../../components/utils/RoleAuthorization";
import SchoolClassScheduleScreenContainer from "../../../../components/school/schedule";
import { ScheduleProvider } from "../../../../context/scheduleContext";
import { useParams } from "react-router-dom";

const SchoolEditClassScheduleScreen = () => {
  const { id } = useParams();

  return (
    <RoleAuthorization allowedRoles={["MANAGER"]}>
      <ScheduleProvider isEditMode={true} classId={id}>
        <SchoolClassScheduleScreenContainer />
      </ScheduleProvider>
    </RoleAuthorization>
  );
};

export default SchoolEditClassScheduleScreen;
