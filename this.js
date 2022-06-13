"use strict";
let person = {
  name: "kathish kumaran",
  college: "PSR",
  detail: () => {
    console.log("I am " + this.names + " from " + this.college);
  },
};
console.log(person);
