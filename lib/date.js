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


export const formatDuration = (duration) => {
    if (!duration) return null;

    var hour = Math.floor(duration / 3600);
    var min = Math.floor(duration % 3600 / 60);
    var sec = Math.floor(duration % 3600 % 60);

    const durationString = `${hour}:${min}:${sec}`;

    console.log(durationString);

    return durationString;
  }