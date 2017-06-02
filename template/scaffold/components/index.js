const path = require('path')
const changeCase = require('change-case')

module.exports = (plop, config) => {
  plop.setGenerator(`${config.prefix}component`, {
    description: 'Generate Component',
    prompts: [{
      type: 'input',
      message: 'Component name',
      name: 'componentName',
      validate: (value) => {
        if (!value.length) return 'A component name is required.'
        if (!value.match(/^[a-zA-Z]+$/)) return 'A component name can only contain letters.'
        if (changeCase.pascalCase(value) !== value) return 'A component name must be written in PascalCase.'
        return true
      }
    }],
    actions: (answers) => {
      const actions = [{
        type: 'add',
        path: path.resolve(config.basePath, 'components', answers.componentName, 'index.js'),
        templateFile: path.resolve(__dirname, 'component.hbs')
      }, {
        type: 'add',
        path: path.resolve(config.basePath, 'components', answers.componentName, 'style.scss'),
        templateFile: path.resolve(__dirname, 'component.scss.hbs')
      }]

      return actions
    }
  })
}
