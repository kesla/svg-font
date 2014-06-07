var parallel = require('run-parallel')
  , trumpet = require('trumpet')
  , parse = function (callback) {
      var tr = trumpet()
        , result = {}

      tr.selectAll('glyph', function (glyph) {
        glyph.getAttribute('unicode', function (unicode) {
          glyph.getAttribute('d', function (d) {
            result[unicode] = d
          })
        })
      })

      tr.once('end', function () {
        callback(null, result)
      })

      return tr
    }

module.exports = parse