module.exports = {
  template: 'handlebars',
  prompts: {
    name: {
      required: true,
      message: 'Project name',
      role: 'folder:name'
    },
    description: {
      required: false,
      message: 'Project description',
      default: 'My Superb Vue Project'
    },
    author: {
      message: 'Author',
      role: 'git:name'
    },
    eslint: {
      type: 'confirm',
      message: 'Do you want to support ESLint?'
    },
    jsx: {
      type: 'confirm',
      message: 'Generate components in JSX format?',
      default: false
    },
    electron: {
      type: 'confirm',
      message: 'Support Electron?',
      default: false
    },
    "testcafe": {
      "type": "confirm",
      "message": "Add testcafe to run integration tests?",
      "default": false
    }
  },
  filters: {
    'client/components/*.vue': '!jsx',
    'client/components/**/*.{js,css}': 'jsx',
    'client/views/*.vue': '!jsx',
    'client/views/**/*.{js,css}': 'jsx',
    'app/*': 'electron',
    '.eslintrc': 'eslint',
    "test/e2e/*": "testcafe"
  },
  post({ log, gitInit, npmInstall, chalk, isNewFolder, folderName }) {
    gitInit()
    npmInstall()

    log.success(`Your new Vue project has been successfully generated in ${chalk.underline(folderName)}!`)
    console.log()
    console.log(chalk.bold(`  To get started:\n`))
    if (isNewFolder) console.log(`  cd ${folderName}`)
    console.log(`  yarn`)
    console.log(`  yarn dev\n`)
    console.log(chalk.bold(`  To build for production:\n`))
    console.log(`  yarn build\n`)
  }
}
