function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // runs later
}

greet("Alex", () => {
  console.log("Welcome!");
});
