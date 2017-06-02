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
      var actions = [{
        type: 'add',
        path: path.resolve(config.basePath, 'views', answers.viewName, 'index.js'),
        templateFile: path.resolve(__dirname, 'view.hbs')
      }]

      if (answers.shouldAddRoute) {
        actions.concat(
          [{
            type: 'modify',
            path: path.resolve(config.basePath, 'router', 'index.js'),
            pattern: /(routes: \[)/,
            template: '$1\n    {\n      path: \'/\{{lowerCase viewName }}\',\n      name: \'\{{ viewName }}\',\n      component: \{{ viewName }}\n    },'
          }, {
            type: 'modify',
            path: path.resolve(config.basePath, 'router', 'index.js'),
            pattern: /(\nVue.use\(Router\))/,
            template: 'import \{{ viewName }} from \'../views/\{{ viewName }}\'\n$1'
          }]
        )
      }

      return actions
    }
  })
}
