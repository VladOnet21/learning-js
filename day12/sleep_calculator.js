const getSleepHours = day => {
  const dayMapper = {
    monday: 8,
    tuesday: 8,
    wednesday: 6,
    thursday: 7,
    friday: 5,
    saturday: 10,
    sunday: 11,
  };

  return dayMapper[day.toLowerCase()];
};

const getActualSleepHours = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return days.reduce((acc, curr) => acc + getSleepHours(curr), 0);
};

const getIdealSleepHours = () => 8 * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    const difference = actualSleepHours - idealSleepHours;
    console.log(`Got more sleep than needed, with ${difference} hours`);
  } else {
    const difference = idealSleepHours - actualSleepHours;
    console.log(`You should get some rest, with ${difference} hours`);
  }
};

calculateSleepDebt();
