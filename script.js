

function greetUser(name) {
  if (name == "") {
    console.log("Hello, Guest");
  } else {
    console.log(`Hello, ${name}`);
  }
};

greetUser(prompt("what your  name"));