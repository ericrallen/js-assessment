exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
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
};
