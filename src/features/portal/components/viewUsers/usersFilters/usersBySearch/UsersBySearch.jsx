import {
  filterBySearch,
  useUsersContext,
} from "../../context/viewUsersContext";

import SearchContainer from "../../../../../../components/ui/search/Search";

const SchoolUsersBySearch = () => {
  const { dispatch } = useUsersContext();

  const handleFindUser = (searchValue) => {
    dispatch(filterBySearch(searchValue));
  };

  const handleReset = () => {
    dispatch(filterBySearch(null));
  };

  return (
    <SearchContainer
      filter={handleFindUser}
      reset={handleReset}
      placeholder="Find user"
    />
  );
};

export default SchoolUsersBySearch;
