var Moment = require('moment')

var time = {
  getTime: function () {
    var a = new Moment()
    return a.format('h:mm:ss a')
  },
}

module.exports = time