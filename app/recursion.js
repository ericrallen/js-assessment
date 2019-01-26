exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const dirToFind = dirName;

    const directoryContents = [];

    // we'll just keep using this recursively to find the content of each directory
    const listContents = (directoryData) => {
      const { dir, files } = directoryData;

      // when we iterate through the contents of the directory, we may find a file or another directory
      files.forEach((fileOrDirectory) => {
        if (typeof fileOrDirectory === 'string' && (!dirToFind || dirToFind === dir)) {
          directoryContents.push(fileOrDirectory);
        } else {
          listContents(fileOrDirectory);
        }
      });
    };

    listContents(data);

    return directoryContents;
  },

  // I cheated. I don't believe you need to know how to do this without looking it up
  permute: function(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let allOthers = this.permute(arr.slice(0, i).concat(arr.slice(i + 1)));

      if (!allOthers.length) {
        result.push(arr[i]);
      } else {
        for (let j = 0; j < allOthers.length; j++) {
          result.push([ arr[i] ].concat(allOthers[j]));
        }
      }
    }

    return result;
  },

  fibonacci: function(n) {
    if (n < 1) {
      return 0;
    }
    
    if (n < 2) {
      return 1;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    let startingState = '';

    for (let i = 0; i < n; i++) {
      startingState += '()';
    };

    const allPermutations = this.permute(startingState.split(''));

    return allPermutations
      .filter((item) => {
        // TODO: actually filter for valid pairs here
      })
      .map(item => item.join(''))
    ;
  }
};
