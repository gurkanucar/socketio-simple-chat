export const timeStampConverter = (time) => {
  const date = new Date(time);
  const minute = date.getMinutes();
  const hour = date.getHours();
  return `${hour}:${minute}`;
};
