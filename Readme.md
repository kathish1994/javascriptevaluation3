# Evaluation -3
## 1. What is the scope of ‘this’ inside the Arrow function? Explain with an example?
* this , inside the arrow function, implies that the function does not have a this value of its own.They don't define their own context since it doesn't have its own this context. They inherit that from the parent scope whenever you call this . The parent scope is the window scope.

## Example
```Javascript
"use strict";
let person = {
  name: "kathish kumaran",
  college: "PSR",
  detail: () => {
    console.log("I am " + this.names + " from " + this.college);
  },
};
console.log(person);
```
## 2. How would you create all permutations of a string?
* A Permutation of a string is another string that contains same characters, only the order of characters can be different. 

```Javascript
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
```
## 3. What is the difference between when classic and arrow functions are used as event callbacks?
```Javascript
let callback = () => {
  console.log(this); // it gives the window object.
};

document.addEventListener("click", callback);

function callBack() {
  console.log("Hi I am in Normal function");
}

document.addEventListener("click", callBack);
```
## 4. Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?
```Javascript
for(var i = 0; i < 10; i++) {
setTimeout(function() {
console.log(i);
}, 10);
}
```
## 5. Explain the Class instance method and static method with an example?
## class instance
```Javascript
class Address {
  constructor(name1, city) {
    this.name1 = name1;
    this.city = city;
  }
  class1() {
    console.log("name: " + this.name1 + ", city: " + this.city);
  }
}
let detail = new Address("kathish", "tenkasi");
detail.class1();
console.log(detail);
```
## static method
```Javascript
class Student {
  constructor(name2, mark) {
    this.name2 = name2;
    this.mark = mark;
  }
  static staticMethod(name2, mark) {
    console.log(`name: ${name2},mark: ${mark}`);
  }
}
let detail1 = new Student("kathish", 999);
console.log(detail1);
Student.staticMethod("pradeep", 1000);
```

## 6. How does “this” works inside the Class method with an example?
```Javascript
class Address {
  constructor(name1, city) {
    this.name1 = name1;
    this.city = city;
  }
  class1() {
    console.log("name: " + this.name1 + ", city: " + this.city);
  }
}
let detail = new Address("kathish", "tenkasi");
detail.class1();
console.log(detail);
```
## 7. What is the execution order of the following block of code?
```Javascript
const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2)
const ex = () => {
console.log(ex)
setTimeout(ex1, 1000)
ex2()
}
ex()
```
## 8. Explain the event loop with an example?
## Call Stack
* A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
* JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.

* The call stack works based on the LIFO principle i.e., last-in-first-out.

* When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.

* Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

* If a function calls another function, the JavaScript engine creates a new function execution context for the function that is being called and pushes it on top of the call stack.

* When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

* The script will stop when the call stack is empty.

## Event Loop
* JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. 
* The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop.

```Javascript
console.log("Hi");
setTimeout(function cb1() {
  console.log("cb1");
}, 5000);
console.log("Bye");
```
## 9. Create a custom event listener and explain?
* The CustomEvent interface represents events initialized by an application for any purpose.
```Javascript
<!DOCTYPE html>
<html>

<head></head>

<body>
  <p>good morning</p>
  <p>Click anywhere in the document to perform a calculation.</p>
  <button id="demo">Subscribe</button>
  <script>
    document.addEventListener("click", () => {
      document.getElementById("demo").innerHTML = "Subscribed"
      })
  </script>
</body>
</html>
```
## 10. Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?
* The super keyword in JavaScript is used in order to call the methods of the parent class. By itself, super() is used within a constructor function to call the parent constructor function.

```Javascript
class Detail {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  method() {
    return `I am ${this.name}, I am living in  ${this.address}`;
  }
}
class Person extends Detail {
  constructor(name, address, age) {
    super(name, address);
    this.age = age;
  }
  method() {
    console.log(`${super.method()}, and My age is ${this.age}.`);
  }
}
let person1 = new Person("Kathish Kumaran", "Tenkasi", 23);

person1.method();
```
