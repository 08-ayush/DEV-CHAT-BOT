import { resolve } from "path";
import { useState } from "react";

let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve("Success1");
    } else {
      reject("Failure1");
    }
  }, 2000);
});

myFirstPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .resolvedValue("Success1")
  .finally("Failure1");

function greet(name, callback) {
  console.log(`Hello my name is ${name}`);
  callback();
}

function name() {
  console.log("Hello");
}

greet("Aayush", name);

function outerfunction() {
  let count = 0;

  function innerFunction() {
    count++;
  }
}
const counter = outerfunction();
counter();
counter();

const [value, setValue] = useState(0);

function increment() {
  setValue(value + 1);
}

<div>
  <p>{value}</p>
  <button onClick={increment}>Increment</button>
</div>;

















personaldetails ={
   name: "Aayush",
  
   
  
}


UserInterface ={
    name: "Aayush",
    email: "05ayush"
}
