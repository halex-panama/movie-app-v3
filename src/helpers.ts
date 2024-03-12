import dayjs from "dayjs";

// Convert time to hours and minutes
export const calcTime = (time:number) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money:number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const formatRating = (rating:number) => {
  const fixedRating = rating.toFixed(1);
  return fixedRating;
};

export const formatReleaseDate = (date:string) => {
  const releaseDate = dayjs(date).format("MMM D, YYYY");
  return releaseDate;
};

export const randomArray = (length:number) => {
  return Math.floor(Math.random() * length);
};

//session storage
export const isPersistedState = (stateName:string) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};
