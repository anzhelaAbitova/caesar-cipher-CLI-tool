const fs = require('fs')
const polite =  'Please, try again!'

const validateShift = (shift, error, terminator) => {
  if (shift === undefined) {
    error = true
    console.error(`Option "shift" is required option!${polite}`)
  } else if (!Number.isInteger(+shift)) {
    error = true
    console.error(`Option "shift" must be integer!${polite}`)
  }

  if (error) {
    terminator()
  }
}

const validateAction = (action, error, terminator) => {
  if (action === undefined) {
    error = true
    console.error(`Option "action" is required option!${polite}`)
  } else if (action !== 'encode' && action !== 'decode') {
    error = true
    console.error(`Option "action" must be only: "encode" or "decode"!${polite}`)
  }

  if (error) {
    terminator()
  }
}

const checkFile = (name, type) => {
  if (type !== 'input' && type !== 'output') {
    return false
  }

  if (fs.existsSync(name)) {
    try {
      fs.accessSync(name, type === 'input' ? fs.constants.W_OK : fs.constants.R_OK)
    } catch (err) {
      console.error(`You cannot access ${type} file "${name}"!${polite}`)
      return false
    }
  } else {
    console.error(`Your ${type} file "${name}" doesn't found!${polite}`)
    return false
  }

  return true
}

const validateFile = (input, output, error, terminator) => {
  if ((input && !checkFile(input, 'input')) || (output && !checkFile(output, 'output'))) {
    error = true
    terminator()
  }
}

function validate(shift, input, output, action, terminator) {
  let error = false
  validateShift(shift, error, terminator)
  validateFile(input, output, error, terminator)
  validateAction(action, error, terminator)
}

module.exports = validate
