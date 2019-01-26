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
    // this is gross and I don't understand the point
    // I haven't yet needed to deal with numbers like this, and I hope that trend
    // continues
    const bits = num.toString(2);

    let pad;

    if (bits.length < 8) {
      pad = Array
        .from({ length: 8 - bits.length })
        .map(element => 0)
        .join('')
      ;
    }

    return (pad) ? `${pad}${bits}` : bits;
  },

  multiply: function(a, b) {
    // this is probably an overly verbose way of dealing with it, but ¯\_(ツ)_/¯
    // we're essentially checking the precision of each number and using the maximum
    // number of decimals to set our final precision
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
