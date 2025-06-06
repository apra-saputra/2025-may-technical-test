export const dateFormater = (date: string) => {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};
export const dateFormaterFull = (date: string) => {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeStyle: 'short',
    hourCycle: "h12"
  }).format(new Date(date));
};
