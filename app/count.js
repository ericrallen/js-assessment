exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    // TODO: Figure out why I'm dumb and don't understand what they are asking for here
    let timer;

    const counting = () => {
      console.log(start);

      start = start + 1;

      if (start <= end) {
        timer = setTimeout(counting, 100);
      }
    }

    counting();

    return {
      cancel: () => clearTimeout(timer),
    }
  }

  /*
  const makeTimer = () => {
      console.log(start++)
      if (start <= end)
        timer = setTimeout(makeTimer, 100)
    }
    makeTimer()
    */
};
