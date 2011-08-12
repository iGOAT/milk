var Application = new Class({
  initialize: function (options) {
    console.log(options);
  },
  
  respond: function (req) {
    return {
      code: 200,
      headers: {'Content-Type': 'text/plain'},
      body: 'Milk!'
    }
  }
});

exports = module.exports = Application;