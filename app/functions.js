exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (string) {
      return str + ', ' + string;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map((item) => {
      return () => fn(item);
    });
  },

  partial: (fn, str1, str2) => (str) => fn(str1, str2, str),

  useArguments: function() {
    var args = [...arguments];

    return args.reduce(function(total, item) {
      return total + item;
    }, 0);
  },

  callIt: function(fn) {
    var args = [...arguments];

    return fn.apply(this, args.slice(1));
  },

  partialUsingArguments: (fn, ...args) => (...args2) => fn(...args, ...args2),

  curryIt: function(fn) {
    // get the number of expected parameters from our provided function
    const expectedArguments = fn.length;

    // create an Array to hold our gathered parameters
    const parameters = [];

    // create our function that will accumulate our parameters
    const curryingFunction = (arguments, totalArgs) => {
      // accept the parameter passed into our curryIt method
      return (parameter) => {
        // add the parameter to our parameters Array
        arguments.push(parameter);

        // if we have all the expected paramters
        if (arguments.length === totalArgs) {
          // execute the provided function
          return fn(...arguments);
        }

        // otherwise, we'll just keep on accumulating parameters
        return curryingFunction(arguments, totalArgs);
      }
    }

    // return our currying method
    return curryingFunction(parameters, expectedArguments);
  }
};
