// lib/date.js

export const formatMyDate = (date) => {
  // Check if the date is valid
  if (!date || isNaN(new Date(date).getTime())) {
    return ''; // Return an empty string if the date is invalid
  }

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Create and format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  return formattedDate;
};
