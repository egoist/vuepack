module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        required: true,
        message: 'Project name',
        role: 'folder:name'
      },
      {
        name: 'description',
        required: false,
        message: 'Project description',
        default: 'My Superb Vue Project'
      },
      {
        name: 'author',
        message: 'Author',
        default: '{gitUser:name}'
      },
      {
        name: 'eslint',
        type: 'confirm',
        message: 'Do you want to support ESLint?'
      },
      {
        name: 'jsx',
        type: 'confirm',
        message: 'Generate components in JSX format?',
        default: false
      },
      {
        name: 'electron',
        type: 'confirm',
        message: 'Support Electron?',
        default: false
      },
      {
        name: 'testcafe',
        type: 'confirm',
        message: 'Add testcafe to run integration tests?',
        default: false
      }
    ]
  },
  actions() {
    return [
      {
        type: 'add',
        files: '**',
        filters: {
          'client/components/*.vue': '!jsx',
          'client/components/**/*.{js,css}': 'jsx',
          'client/views/*.vue': '!jsx',
          'client/views/**/*.{js,css}': 'jsx',
          'app/*': 'electron',
          '.eslintrc': 'eslint',
          'test/e2e/*': 'testcafe'
        },
      }
    ]
  },
  async completed() {
    const { log: logger, gitInit, npmInstall, chalk, isNewFolder, folderName } = this

    gitInit()
    await npmInstall()

    logger.success(`Your new Vue project has been successfully generated in ${chalk.underline(folderName)}!`)
    console.log()
    console.log(chalk.bold(`  To get started:\n`))
    if (isNewFolder) console.log(`  cd ${folderName}`)
    console.log(`  yarn`)
    console.log(`  yarn dev\n`)
    console.log(chalk.bold(`  To build for production:\n`))
    console.log(`  yarn build\n`)
  }
}
