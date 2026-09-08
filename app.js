function greet(name) {
  if (name.trim() === "") {
    throw new Error("Name must not be empty");
  }

  return `Hello ${name}`;
}

console.log(greet("World"));
