const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 7;
    case 'friday':
      return 5;
    case 'saturday':
      return 10;
    case 'sunday':
      return 11;
    default:
      return 'Error';
  }
};
const getActualSleepHours = () => {
  let sum =
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  return sum;
};
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    let dif = actualSleepHours - idealSleepHours;
    console.log(`Got more sleep than needed, with ${dif} hours`);
  } else {
    let dif1 = idealSleepHours - actualSleepHours;
    console.log(`Should get some rest ${dif1} hours`);
  }
};
calculateSleepDebt();
