import "./card.css";

import { useEffect } from "react";
import { useState } from "react";
import Student from "../../../../../../../services/firebase/controllers/users/student";
import ViewDataValueCard from "../../../../viewDataValueCard/ViewDataValueCard";

const StudentsCountCard = () => {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const countValue = await Student.getCount({});
    setCount(countValue);
  };

  useEffect(() => {
    getCount();
  }, []);

  return <ViewDataValueCard dataLabel={"Students"} value={count} />;
};

export default StudentsCountCard;
