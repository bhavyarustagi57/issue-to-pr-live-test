function greet(name) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("name must not be empty");
  }

  return `Hello ${name}`;
}

console.log(greet("World"));
