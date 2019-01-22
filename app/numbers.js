exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // i stole this from somewhere because I can't imagine a scenario when
    // I actually need to do this for any reason and I would totally just
    // look it up again
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    // TODO: add logic for this
    return num;
  },

  multiply: function(a, b) {
    var parsedA = a.toString().split('.');
    var parsedB = b.toString().split('.');

    var aPrecision = 0;
    var bPrecision = 0;

    if (parsedA.length > 1) {
      aPrecision = parsedA[1].length;
    }

    if (parsedB.length > 1) {
      bPrecision = parsedB[1].length;
    }

    var precision = Math.max(aPrecision, bPrecision);

    return parseFloat((a * b).toFixed(precision));
  }
};
