function sum(a) {
  return function (b) {
    return a + b;
  };
};

let sum5 = sum(5);

console.log(sum5(3));
