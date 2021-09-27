function printNumbers() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
}

function printNumberClosure() {
  var i;
  for (i = 0; i < 10; i++) {
    const eventuallyPrintNumber = (n) => {
      setTimeout(function () {
        console.log(n);
      }, 100);
    };
    eventuallyPrintNumber(i);
  }
}

export default {
  printNumbers,
  printNumberClosure
};
