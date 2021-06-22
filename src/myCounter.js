/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

const myCounter = () => {
  var myArray = [];
  for (var pattern1 = 0; pattern1 <= 3; pattern1 += 1) {
    myArray.push(pattern1);
    for (var pattern2 = 2; pattern2 <= 3; pattern2 += 1) {
      myArray.push(pattern2);
    }
  }
  return myArray;
};

module.exports = myCounter;
