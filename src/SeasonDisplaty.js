import React from "react";
import "./SeasonDisplay.css";

const configSeason = {
  summer: {
    text: "Let's, Hit beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burrr, It's Chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};
const seasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = configSeason[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={` icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={` icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default seasonDisplay;
