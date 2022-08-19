import "./viewClasses.css";

import Class from "../../../../../../services/firebase/controllers/classes/class";
import { useGetData } from "../../../../../../services/firebase/hooks/useGetData";
import SchoolClass from "./class/Class";
import Loading from "../../../../../../components/utils/loading/Loading";

const SchoolViewClasses = () => {
  const [classes, isLoading] = useGetData({
    controller: Class,
    queryOptions: {},
  });

  const renderClasses = () =>
    classes.map((classData) => (
      <SchoolClass key={classData.id} {...classData} />
    ));

  return (
    <div className="school_viewClasses">
      <h1>All classes</h1>
      <div className="school_viewClasses_classes">
        {isLoading ? <Loading /> : renderClasses()}
      </div>
    </div>
  );
};

export default SchoolViewClasses;
