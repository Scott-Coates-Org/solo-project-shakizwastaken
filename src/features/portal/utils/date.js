import { useEffect, useState } from "react";
import Lesson from "../../../services/firebase/controllers/classes/lesson";
import { useGetData } from "../../../services/firebase/hooks/useGetData";

export const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getCurrentDate = () => new Date();

export const addHours = (numOfHours, date) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  return date;
};

export const getTimePeriods = ({ from, to }) => {
  let fromDate = new Date(`01/01/0000 ${from}`);
  let toDate = new Date(`01/01/0000 ${to}`);

  let result = [];

  while (fromDate.getTime() < toDate.getTime()) {
    //period start time
    const startTime = new Date(fromDate.getTime());
    const endTime = new Date(addHours(1, fromDate).getTime());

    result.push({ startTime, endTime });
  }

  return result;
};

//return date as HH:MM
export const getHourMin = (date) =>
  date.toLocaleTimeString("fr-EU", {
    hour: "2-digit",
    minute: "2-digit",
  });

//find closest date from array of dates to the provided target date
export const findClosestDate = (dates, target = new Date()) => {
  return dates.reduce((prev, curr, i) => {
    if (curr.getDate() === target.getDate()) {
      if (target.getTime() - curr.getTime() > 0) return prev;

      const a = prev.getTime() - target.getTime();
      const b = curr.getTime() - target.getTime();

      return a - b > 0 ? curr : prev;
    }

    if (prev.getDate() === curr.getDate())
      return curr.getTime() < prev.getTime() ? curr : prev;

    if (prev.getDate() !== target.getDate()) {
      const a = prev.getDate() - target.getDate();
      const b = curr.getDate() - target.getDate();

      if (a < 0) return curr;
      if (b < 0) return prev;

      return a - b > 0 ? curr : prev;
    }

    return prev;
  });
};

export const useTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return [currentTime];
};

export const toTwoDigits = (number) => {
  if (number.toString().length === 1) return `0${number}`;
  if (number.toString().length === 0) return `00`;
  return number;
};

export const getDateFromHHMM = ({ HH, MM }) => new Date(`00/ ${HH}:${MM}`);

export const getTimeLeftDate = (startTime, endTime) => {
  let countDown = endTime.getTime() - startTime.getTime();

  //days
  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));

  let hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return `${toTwoDigits(days)}d:${toTwoDigits(hours)}h:${toTwoDigits(
    minutes
  )}m:${toTwoDigits(seconds)}s`;
};

//get next [Day]'s date
export const getNextDayDate = (dayToSet, date = new Date()) => {
  let dateRef = new Date(date.getTime());
  let currentDay = getCurrentDate().getDay();
  let distance = dayToSet - currentDay + 1;
  if (distance < 0) distance += 7;
  dateRef.setDate(dateRef.getDate() + distance);

  return dateRef;
};

//match dateB's month, year and week with dateA
export const uniteDate = (dateA, dateB) => {
  //date clone
  let dateAClone = new Date(dateA.getTime());
  let unitedDateB = new Date(dateB.getTime());

  //match year
  unitedDateB.setFullYear(dateA.getFullYear());

  //match month
  unitedDateB.setMonth(dateA.getMonth());

  //match week
  unitedDateB.setDate(getNextDayDate(unitedDateB.getDay(), dateA));

  return [dateAClone, unitedDateB];
};

export const useTimer = () => {
  const [currentTime] = useTime();
  const [endTime, setEndTime] = useState(new Date());
  return [getTimeLeftDate(currentTime, endTime), endTime, setEndTime];
};

export const useGetTimeIntervalLesson = ({ startTime, classId }) => {
  const [lessonData, setLessonData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getLesson = async () => {
    console.log(startTime.getDay(), "start");
    setLoading(true);
    const lessons = await Lesson.getLessonFromDateClass({
      startTime: getHourMin(startTime),
      dayId: startTime.getDay() === 0 ? 6 : startTime.getDay() - 1,
      classId,
    });

    //no lesson found
    if (!lessons?.length) return setLoading(false);

    //lesson found
    setLessonData(lessons[0]);
    setLoading(false);
  };

  useEffect(() => {
    if (!isLoading) getLesson();
    const unsubscribe = Lesson.onUpdate(getLesson);
  }, []);

  useEffect(() => {
    getLesson();
    console.log(startTime.getDay());
  }, [startTime]);

  return [lessonData, isLoading];
};

export const useGetClosestLesson = ({ classId, timeInterval }) => {
  const [lessons, isLoading] = useGetData({
    controller: Lesson,
    queryOptions: { where: ["classId", "==", classId] },
  });

  //get closest date to current time
  let getMappedPeriods = () =>
    lessons.map(({ startTime, weekDay }) => {
      let dateRef = new Date(`00 ${startTime}`);
      dateRef.setFullYear(getCurrentDate().getFullYear());
      dateRef.setMonth(getCurrentDate().getMonth());
      dateRef.setDate(getCurrentDate().getDate());
      dateRef = getNextDayDate(weekDay, dateRef);
      return dateRef;
    });

  const [timeLeft, closestDate, setClosestDate] = useTimer();

  const [lessonData, lessonLoading] = useGetTimeIntervalLesson({
    startTime: closestDate,
    classId,
  });

  useEffect(() => {
    if (!isLoading) {
      setClosestDate(findClosestDate(getMappedPeriods()));
    }
  }, [isLoading]);

  return { lessonData, isLoading: lessonLoading, timeLeft };
};
