import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const displayText = season === 'winter' ? 'Burr, it is chilly' : "Let's hit the beach";
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  // console.log(season);
  return ( 
    <div>
      {/* Show the snowflake or sun icon */}
      <i className={`${icon} icon`} /> 
      <h1>{displayText}</h1>
      <i className={`${icon} icon`} /> 
    </div>
  );
};

export default SeasonDisplay;