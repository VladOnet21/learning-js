const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
  return 'undefined';
};

const getTrainingDays = event => {
  let days;

  switch (event) {
    case 'Marathon':
      days = 50;
      break;
    case 'Triathlon':
      days = 100;
      break;
    case 'Pentathlon':
      days = 200;
      break;
    default:
      throw new Error('Invalid event type');
  }

  return days;
};

const logEvent = (name, event) => console.log(`${name}'s event is: ${event}`);

const logTime = (name, days) => console.log(`${name}'s time to train is: ${days} days`);

const event1 = getRandEvent();
const trainingDays1 = getTrainingDays(event1);

const event2 = getRandEvent();
const trainingDays2 = getTrainingDays(event2);

logEvent('Marcela', event2);

logTime('Marcela', trainingDays2);

logEvent('Emilian', event1);

logTime('Emilian', trainingDays1);
