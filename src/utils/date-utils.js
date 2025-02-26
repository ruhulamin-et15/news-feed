const shortFormatDate = (dateString) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const longFormatDate = (dateString) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export { longFormatDate, shortFormatDate };
