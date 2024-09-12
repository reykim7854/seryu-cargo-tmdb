export const NumberToTime = (num: number): string => {
  const hours: number = Math.floor(num / 60);
  let minutes: number | string = num % 60;
  if (minutes + "".length < 2) {
    minutes = `0${minutes}`;
  }
  return `${hours} h ${minutes} m`;
};
