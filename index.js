// add solution here
function theBeatlesPlay(musArr, instArr) {
  var emptyArr = [];
  
  for (var i = 0; i < musArr.length; i++) {
    emptyArr.push(musArr[i] + " plays " + instArr[i])
  }
  
  return emptyArr;
  
}

// const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ]

function johnLennonFacts(arr) {
  var index = arr.length - 1
  
  while (index >= 0) {
    arr[index] += "!!!";
  }
  
  index -= 1
  
  return arr;
}