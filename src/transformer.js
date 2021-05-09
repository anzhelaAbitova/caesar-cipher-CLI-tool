const cipher = require('./cipher')
const { Transform } = require('stream')

class Transformer extends Transform {
  constructor(action, shift) {
    super()
    this.action = action
    this.shift = +shift
  }

  _transform(chunk, encoding, callback) {
    const cipheredString = cipher(
      chunk.toString('utf8'),
      this.action === 'encode' ? this.shift : -this.shift,
    )
    this.push(cipheredString)
    callback()
  }
}

module.exports = Transformer
