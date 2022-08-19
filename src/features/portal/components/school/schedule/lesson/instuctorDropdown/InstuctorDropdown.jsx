import "./instuctorDropdown.css";

import { useEffect } from "react";
import { useState } from "react";
import Instructor from "../../../../../../../services/firebase/controllers/users/instructor";
import Loading from "../../../../../../../components/utils/loading/Loading";

const InstuctorDropdown = ({ register }) => {
  const [instuctors, setInstuctors] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getInstructors = async () => {
    setLoading(true);
    let data = await Instructor.getInstructors();
    console.log(data);
    setInstuctors(data);
    setLoading(false);
  };

  useEffect(() => {
    getInstructors();
  }, []);

  const renderOptions = () =>
    instuctors.map(({ id, firstName, lastName }) => (
      <option value={id}>{`${firstName} ${lastName}`}</option>
    ));

  return (
    <select
      {...register("instructorId", { required: true })}
      className="instuctors_dropdown"
    >
      {isLoading ? <Loading /> : renderOptions()}
    </select>
  );
};

export default InstuctorDropdown;
