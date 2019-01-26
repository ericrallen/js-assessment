exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => resolve(value));
  },

  manipulateRemoteData: function(url) {
    const returnData = [];

    return fetch(url)
      .then(response => response.json())
      .then(data => data.people.map((person) => person.name).sort())
    ;
  }
};
