// load mootools
require('mootools');

// load dependencies
var Application = require('./application');
var http = require('http');

var Server = new Class({
  
  Implements: [Options],
  
  options: {
    host: 'localhost',
    port: '1337'
  },
  
  // start server
  initialize: function (options) {
    http.createServer(this.respond.bind(this)).listen(this.options.port, this.options.host);
    console.log('Server running at http://' + this.options.host + ':' + this.options.port + '/');
  },
  
  // responds to a request
  respond: function (request, response) {
    var app = this.getApplication(request);
    var appResponse = app.respond(request);
    response.writeHead(appResponse.code, appResponse.headers);
    response.end(appResponse.body);
  },

  // gets application for a given request
  getApplication: function (request) {
    // TODO: find application from routes
    return new Application({foo: 'bar'});
  }
});

exports = module.exports = Server;