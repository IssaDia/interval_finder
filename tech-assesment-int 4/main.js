const dates = [
  ["01.01.2000", "01.01.2016"],
  ["01.01.2016", "01.08.2016"],
  ["01.11.2015", "01.02.2017"],
  ["17.12.2016", "16.01.2017"],
  ["01.01.2016", "01.01.2016"],
  ["28.02.2015", "13.04.2018"],
  ["28.01.2015", "28.02.2015"],
  ["17.03.2022", "17.03.2023"],
  ["17.02.2024", "17.02.2025"],
];

// Receive string of dates one after each other
function outputDate(dates) {
  //get day,month and year separately for starting period
  const firstPeriodArrayValues = dates[0].match(
    /([0-9]{2})\.([0-9]{2})\.([0-9]{4})/
  );
  //get day,month and year separately for ending period

  const secondPeriodArrayValues = dates[1].match(
    /([0-9]{2})\.([0-9]{2})\.([0-9]{4})/
  );

  // build date object for starting period
  const startingPeriod = new Date(
    firstPeriodArrayValues[3],
    firstPeriodArrayValues[2],
    firstPeriodArrayValues[1],
    0,
    0,
    0
  );

  // build date object for ending period
  const endingPeriod = new Date(
    secondPeriodArrayValues[3],
    secondPeriodArrayValues[2],
    secondPeriodArrayValues[1],
    0,
    0,
    0
  );

  // get rounded difference between period
  let diff = Math.floor(endingPeriod.getTime() - startingPeriod.getTime());
  let day = 1000 * 60 * 60 * 24;

  // get number of days between periods
  let days = Math.floor(diff / day);

  // get number of months between periods

  months = (endingPeriod.getFullYear() - startingPeriod.getFullYear()) * 12;
  months -= startingPeriod.getMonth();
  months += endingPeriod.getMonth();

  // get number of years between periods

  let years = Math.floor(months / 12);

  // return right number of years but returns nothing but if years equals to none and add "s" or not depending of years value
  if (years === 0) {
    years = "";
  } else if (years === 1) {
    years = years + " year, ";
  } else {
    years = years + " years, ";
  }

  // returns right number of months but returns nothing but if months superior to 12 or equals to none and add "s" or not depending of years value
  if (months >= 12) months = months - 12;
  if (months === 0 || months > 12) {
    months = "";
  } else if (months === 1) {
    months = months + " month, ";
  } else {
    months = months + " months, ";
  }

  // return string with date values
  return years + months + "total " + days + " days";
}
