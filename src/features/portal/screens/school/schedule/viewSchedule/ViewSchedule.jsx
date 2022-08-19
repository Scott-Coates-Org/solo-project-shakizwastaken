import { useParams } from "react-router-dom";
import { useGetOne } from "../../../../../../services/firebase/hooks/useGetOne";
import Class from "../../../../../../services/firebase/controllers/classes/class";
import Loading from "../../../../../../components/utils/loading/Loading";
import SchoolClassScheduleScreenContainer from "../../../../components/school/schedule";

const SchoolUserSchedule = () => {
  const { id } = useParams();
  const [classData, isLoading] = useGetOne({
    controller: Class,
    id: id,
  });

  return isLoading ? (
    <Loading />
  ) : (
    <SchoolClassScheduleScreenContainer
      classData={classData}
      isEditMode={false}
    />
  );
};

export default SchoolUserSchedule;
