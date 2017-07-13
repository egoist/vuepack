const path = require('path')
const changeCase = require('change-case')

module.exports = (plop, config) => {
  plop.setGenerator(`${config.prefix}view`, {
    description: 'Generate View',
    prompts: [{
      type: 'input',
      message: 'View name',
      name: 'viewName',
      validate: (value) => {
        if (!value.length) return 'A view name is required.'
        if (!value.match(/^[a-zA-Z]+$/)) return 'A view name can only contain letters.'
        if (changeCase.pascalCase(value) !== value) return 'A view name must be written in PascalCase.'
        return true
      }
    }, {
      type: 'confirm',
      message: 'Do you want to add a route for this view?',
      name: 'shouldAddRoute'
    }],
    actions: (answers) => {
      let actions = [{
        type: 'add',
        path: path.resolve(config.basePath, 'views', answers.viewName, 'index.js'),
        templateFile: path.resolve(__dirname, 'view.hbs')
      }]

      if (answers.shouldAddRoute) {
        actions = actions.concat(
          [{
            type: 'modify',
            path: path.resolve(config.basePath, 'router', 'index.js'),
            pattern: /(\/\*\!\ scaffold:insert:route \*\/)/, // https://regex101.com/r/kVn3CA/1
            template: '{\n      path: \'/\{{lowerCase viewName }}\',\n      name: \'\{{ viewName }}\',\n      component: \{{ viewName }}\n    },\n    $1'
          }, {
            type: 'modify',
            path: path.resolve(config.basePath, 'router', 'index.js'),
            pattern: /(\/\*\!\ scaffold:import:route \*\/)/, // https://regex101.com/r/azlBwd/1
            template: 'import \{{ viewName }} from \'../views/\{{ viewName }}\'\n$1'
          }]
        )
      }

      return actions
    }
  })
}
