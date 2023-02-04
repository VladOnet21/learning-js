const addTwo = (num) => num + 2;

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';
};

console.log(checkConsistentOutput(addTwo, 10));
