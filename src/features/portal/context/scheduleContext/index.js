import { createContext, useContext, useEffect, useReducer } from "react";
import Class from "../../../../services/firebase/controllers/classes/class";
import { useGetOne } from "../../../../services/firebase/hooks/useGetOne";
import { setClass, setLoading } from "./actions";
import { actions } from "./constants";

const getInitialState = ({
  isEditMode = false,
  timeInterval = {
    from: "8:30:00 AM",
    to: "4:30:00 PM",
  },
}) => {
  return {
    isLoading: true,
    classData: {},
    timeInterval,
    isEditMode,
  };
};

const scheduleReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.setClass:
      return { ...state, classData: payload };

    case actions.setLoading:
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};

//might not use
export const useDispatchClassData = (id, dispatch) => {
  const [classData, isLoading] = useGetOne({ controller: Class, id });

  useEffect(() => {
    dispatch(setLoading(isLoading));
    dispatch(setClass(classData));
  }, [classData, isLoading, dispatch]);
};
//

export const scheduleContext = createContext();

export const ScheduleProvider = ({ children, isEditMode, classId }) => {
  const [state, dispatch] = useReducer(
    scheduleReducer,
    getInitialState({ isEditMode })
  );

  useDispatchClassData(classId, dispatch);

  return (
    <scheduleContext.Provider value={{ state, dispatch }}>
      {children}
    </scheduleContext.Provider>
  );
};

export const useClassSchedule = () => {
  return useContext(scheduleContext);
};
