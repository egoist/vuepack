// generate BEM like class names from modifiers
const classNameMixin = {
  methods: {
    className (componentName, modifiers, stateClasses) {
      const mods = modifiers.reduce((str, modifier) => {
        return str + ` ${componentName}--${modifier}`
      }, '')

      const stateC = stateClasses && Array.isArray(stateClasses) && stateClasses.length
        ? ' ' + stateClasses.join(' ')
        : stateClasses || ''

      return componentName + mods + stateC
    }
  }
}

export default classNameMixin
