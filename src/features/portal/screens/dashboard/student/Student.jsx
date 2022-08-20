import "./student.css";

import { useCurrentUser } from "../../../../../hooks/useCurrentUser";
import { ScheduleProvider } from "../../../context/scheduleContext";
import PortalPage from "../../../components/ui/portalPage/PortalPage";
import StudentDashboardNextLesson from "../../../components/dashboard/student/nextLesson/NextLesson";

const StudentPortalDashboard = () => {
  const {
    user: {
      student: { classId },
    },
  } = useCurrentUser();

  return (
    <PortalPage className="school_students_manager" title={"Student Dashboard"}>
      <ScheduleProvider classId={classId} isEditMode={false}>
        <StudentDashboardNextLesson />
      </ScheduleProvider>
    </PortalPage>
  );
};

export default StudentPortalDashboard;
