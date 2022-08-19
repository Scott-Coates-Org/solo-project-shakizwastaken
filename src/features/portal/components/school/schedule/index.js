import Loading from "../../../../../components/utils/loading/Loading";
import { useClassSchedule } from "../../../context/scheduleContext";
import PortalPage from "../../ui/portalPage/PortalPage";
import SchoolClassScheduleContainer from "./ScheduleContainer";

const SchoolClassScheduleScreenContainer = () => {
  const {
    state: { classData, isLoading, isEditMode },
  } = useClassSchedule();

  return isLoading ? (
    <Loading />
  ) : (
    <PortalPage
      title={
        isEditMode ? `Edit ${classData.title}'s schedule` : "Your Schedule"
      }
      className="school_class_editSchedule"
    >
      <SchoolClassScheduleContainer />
    </PortalPage>
  );
};

export default SchoolClassScheduleScreenContainer;
