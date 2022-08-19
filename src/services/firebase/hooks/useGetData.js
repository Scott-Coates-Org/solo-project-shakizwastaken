import { useEffect, useState } from "react";

export const useGetData = ({ controller, queryOptions, sort }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const _sortData = (data) => {
    if (sort) return sort(data);
    return data;
  };

  const getData = async () => {
    setLoading(true);
    const data = await controller.findAll({ ...queryOptions, raw: true });
    setData(_sortData(data));
    setLoading(false);
  };

  useEffect(() => {
    //set levels state
    getData();

    if (isLoading) return; //avoid double update
    const unsubscribe = controller.onUpdate(getData); //update state on firestore data change
    // return unsubscribe();
  }, []);

  return [data, isLoading, getData, setData];
};
