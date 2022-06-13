"use strict";
function permutation(string) {
  let length = string.length;
  let arr = string.split("");
  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length - 1; i++) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      console.log(arr.join(","));
    }
  }
}
permutation("ABC");
