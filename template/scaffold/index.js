// Inspired by https://www.npmjs.com/package/plop-generator-redux

module.exports = (plop, config) => {
  // Config defaults.
  config = config || {}
  config.basePath = config.basePath || './client'
  config.prefix = config.prefix ? config.prefix + ':' : ''

  // Helpers.
  plop.addHelper('indexOf', (array, item, options) => {
    if (array.indexOf(item) !== -1) {
      return options.fn(this)
    }

    return options.inverse(this)
  })

  // plop.addPartial('reducerName', '\{{ camelCase reducerNameInput }}')
  plop.addPrompt('directory', require('inquirer-directory'))

  // Generators.
  require('./components')(plop, config)
  require('./views')(plop, config)
  require('./modules')(plop, config)
  // require('./init')(plop, config)
}
