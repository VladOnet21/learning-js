const getSleepHours = day => {
  const getDay = day.toLowerCase();
  switch (getDay) {
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
  const sum = getSleepHours('Monday')
    + getSleepHours('Tuesday')
    + getSleepHours('Wednesday')
    + getSleepHours('Thursday')
    + getSleepHours('Friday')
    + getSleepHours('Saturday')
    + getSleepHours('Sunday');
  return sum;
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    const dif = actualSleepHours - idealSleepHours;
    console.log(`Got more sleep than needed, with ${dif} hours`);
  } else {
    const dif1 = idealSleepHours - actualSleepHours;
    console.log(`Should get some rest ${dif1} hours`);
  }
};

calculateSleepDebt();
