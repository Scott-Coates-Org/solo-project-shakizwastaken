import { useCurrentUser } from "../../../../../../hooks/useCurrentUser";
import SchoolClassScheduleScreenContainer from "../../../../components/school/schedule";
import { ScheduleProvider } from "../../../../context/scheduleContext";

const SchoolCurrentStudentSchedule = () => {
  const {
    user: {
      student: { classId },
    },
  } = useCurrentUser();

  console.log(classId);

  return (
    <ScheduleProvider isEditMode={false} classId={classId}>
      <SchoolClassScheduleScreenContainer />
    </ScheduleProvider>
  );
};

export default SchoolCurrentStudentSchedule;
