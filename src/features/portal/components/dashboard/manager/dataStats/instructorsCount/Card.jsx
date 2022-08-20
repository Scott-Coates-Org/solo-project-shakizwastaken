import "./card.css";

import { useEffect } from "react";
import { useState } from "react";
import Instructor from "../../../../../../../services/firebase/controllers/users/instructor";
import ViewDataValueCard from "../../../../viewDataValueCard/ViewDataValueCard";

const InstructorsCountCard = () => {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const countValue = await Instructor.getCount({});
    setCount(countValue);
  };

  useEffect(() => {
    getCount();
  }, []);

  return <ViewDataValueCard dataLabel={"Instructors"} value={count} />;
};

export default InstructorsCountCard;
