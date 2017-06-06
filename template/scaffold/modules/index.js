const path = require('path')
const changeCase = require('change-case')

module.exports = (plop, config) => {
  plop.setGenerator(`${config.prefix}module`, {
    description: 'Generate Module for Vuex Store',
    prompts: [{
      type: 'input',
      message: 'Module name (camelCase)',
      name: 'moduleName',
      validate: (value) => {
        if (!value.length) return 'A module name is required.'
        if (!value.match(/^[a-zA-Z]+$/)) return 'A module name can only contain letters.'
        if (changeCase.camelCase(value) !== value) return 'A module name must be written in camelCase.'
        return true
      }
    }, {
      type: 'confirm',
      message: 'Do you want to add a data fetching example?',
      name: 'shouldAddDataFetchingExample',
      default: false
    }],
    actions: (answers) => {
      const actions = [{
        type: 'add',
        path: path.resolve(config.basePath, 'store', (answers.moduleName + '.js')),
        templateFile: path.resolve(__dirname, (answers.shouldAddDataFetchingExample ? 'module.hbs' : 'module-simple.hbs'))
      }, {
        type: 'modify',
        path: path.resolve(config.basePath, 'store', 'index.js'),
        pattern: /(\/\*\!\ scaffold:insert:module \*\/)/, // https://regex101.com/r/S28Wrr/1/
        template: '$1\n  {{ moduleName }},'
      }, {
        type: 'modify',
        path: path.resolve(config.basePath, 'store', 'index.js'),
        pattern: /(\/\*\!\ scaffold:import:module \*\/)/, // https://regex101.com/r/TlsnLg/1/
        template: 'import {{ moduleName }} from \'store/{{ moduleName }}\'\n$1'
      }]

      return actions
    }
  })
}
