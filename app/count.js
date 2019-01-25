exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

    let timer;

    const iterate = () => { 
      console.log(start++);

      if (start <= end) {
        timer = setTimeout(iterate, 100);
      }
    };

    iterate();

    return {
      cancel: () => timer && clearTimeout(timer),
    }
  }
};
