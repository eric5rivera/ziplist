function zipList(listA, listB) {
  const result = [];
  for (let i = 0; i < listA.length; i++) {
    result.push(listA[i]);
    result.push(listB[i]);
  }
  return result;
}

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

const testOne = ['hello', 'darkness', 'my', 'old', 'friend'];
const testTwo = [3, 6, 9, 12, 15];

console.log(zipList(testOne, testTwo));
console.log(zipListTheSimpleWay(testOne, testTwo));
