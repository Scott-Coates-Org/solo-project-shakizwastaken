import { useEffect, useState } from "react";

export const useGetOne = ({ controller, id }) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const element = await controller.findFromId(id, { raw: true });
    setData(element);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    if (isLoading) return;
    const unsubscribe = controller.onUpdate(getData); //update state on firestore data change
  }, []);

  return [data, isLoading, getData, setData];
};
