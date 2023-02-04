const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
  const arrElem = arr;
  arrElem[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

const removeElement = newArr => newArr.pop();

removeElement(concept);
console.log(concept);
