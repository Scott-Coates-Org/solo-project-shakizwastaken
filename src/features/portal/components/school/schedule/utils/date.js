export const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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

export const getHourMin = (date) =>
  date.toLocaleTimeString("fr-EU", {
    // en-US can be set to 'default' to use user's browser settings
    hour: "2-digit",
    minute: "2-digit",
  });
