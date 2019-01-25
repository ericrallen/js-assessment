exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    const charCounts = {};
    let currentChar;

    return str
      .split('')
      .map((char) => {
        charCounts[char] = charCounts[char] || {
          total: 0,
          output: 0,
        };

       charCounts[char].total++;

       return char;
      })
      .filter((char) => {
        if (!currentChar) {
          currentChar = char;
        }

        if (char !== currentChar) {
          charCounts[currentChar].output = 0;

          currentChar = char;
        }

        if (charCounts[char].total < amount) {
          return true;
        }

        if (charCounts[char].output < amount) {
          charCounts[char].output++;

          return true;
        }
      })
      .join('')
    ;
  },

  wordWrap: function(str, cols) {
    // there is probably an easier way to achieve this one, but ¯\_(ツ)_/¯
 
    // lets start by getting each word separated
    const words = str.split(' ');

    // this will store each line in our newly wrapped string
    let lines = [];

    // this will store each word in our current line
    let currentLine = [];

    // iterate through our words
    words.forEach((item) => {
      // if we're going to surpass the line length
      if (currentLine.length && currentLine.join(' ').length + item.length >= cols) {
        // we need to start a new line
        lines.push(currentLine.join(' '));

        currentLine = [item];
      } else {
        // otherwise, just add the current word to the current line
        currentLine.push(item);
      }
    });

    // make sure we add any leftover words in the last line to the final string
    lines.push(currentLine);

    // join our lines with linebreaks and return the wrapped sting
    return lines.join('\n');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
