import "./card.css";

import { useEffect } from "react";
import { useState } from "react";
import Class from "../../../../../../../services/firebase/controllers/classes/class";
import ViewDataValueCard from "../../../../viewDataValueCard/ViewDataValueCard";

const ClassesCountCard = () => {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const countValue = await Class.getCount({});
    setCount(countValue);
  };

  useEffect(() => {
    getCount();
  }, []);

  return <ViewDataValueCard dataLabel={"Classes"} value={count} />;
};

export default ClassesCountCard;
