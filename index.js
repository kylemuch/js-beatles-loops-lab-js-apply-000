// add solution here
function theBeatlesPlay(musArr, instArr) {
  var emptyArr = [];
  
  for (var i = 0; i < musArr.length; i++) {
    emptyArr.push(musArr[i] + " plays " + instArr[i])
  }
  
  return emptyArr;
  
}