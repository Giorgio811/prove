function square(num) {
  return num * num;
}

let square_arrow = (num) => {
  return num * num;
};

let v1 = square(4);

let v2 = square_arrow(8);

console.log("normal " + v1);

console.log("arrow " + v2);
