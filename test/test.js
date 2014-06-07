require('interpreted')({
    source: __dirname + '/source'
  , expected: __dirname + '/expected'
  // , update: true
  , test: function (name, content, callback) {
      var stream = new require('stream').PassThrough()
      stream.pipe(require('../svg-font')(function (err, json) {
        callback(null, json)
      }))

      stream.write(content)
      stream.end()
    }
})