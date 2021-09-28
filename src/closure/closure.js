function makeColorPrinter(color) {
  let colorMessage = `The color is ${color}`;
  return function () {
    return colorMessage;
  };
}

function makeCounter(n) {
  let count = n;

  return {
    increase: function () {
        count+=1;
    },
    decrease: function () {
        count-=1;
    },
    getCount: function () {
        return count;
    },
  };
}

export default {
  makeColorPrinter,
  makeCounter
};
