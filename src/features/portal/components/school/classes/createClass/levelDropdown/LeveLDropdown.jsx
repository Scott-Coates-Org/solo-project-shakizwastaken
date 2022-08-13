import "./levelDropdown.css";

import Level from "../../../../../../../services/firebase/controllers/classes/level";
import { useGetData } from "../../../../../../../services/firebase/hooks/useGetData";

const SchoolLeveLDropdown = ({ register }) => {
  const sortLevels = (levels) => levels.sort((a, b) => a.weight - b.weight);
  const [levels, isLoading] = useGetData({
    controller: Level,
    queryOptions: {},
    sort: sortLevels,
  });

  const renderOptions = () =>
    levels.map(({ id, shortVersion }) => (
      <option key={id} value={id}>
        {shortVersion}
      </option>
    ));

  return (
    <div className="flex flex-col w-full gap-2">
      {isLoading ? (
        <h1>loding...</h1>
      ) : (
        <>
          <label className="text-base font-bold">Level</label>
          <select
            className="createClass_levelDropdown "
            {...register("levelId", { required: true })}
          >
            {renderOptions()}
          </select>
        </>
      )}
    </div>
  );
};

export default SchoolLeveLDropdown;
