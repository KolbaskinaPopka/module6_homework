function nums(a, b) {
  let x = a;

  let timerId = setInterval(function() {
    console.log(x);
    if (x === b) {
      clearInterval(timerId);
    }
    x++
  }, 1000);
};

nums(1, 5);