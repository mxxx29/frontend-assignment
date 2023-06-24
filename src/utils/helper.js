import moment from "moment/moment";

export const dateTimeToString = (dateStr, formate) => {
  return moment(dateStr).format("ddd DD MMM YYYY HH:mm");
};
