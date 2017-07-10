import bows from 'bows'

bows.config({
  padding: false,
  separator: '//'
})

const log = bows('')

const Log = {
  install (Vue) {
    Vue.mixin({
      created () {
        this.log = bows(this.$options.name || '')
      }
    })

    // More about defineProperty: https://stackoverflow.com/a/38961512/2176822
    Object.defineProperty(Vue.prototype, '$createLog', { value: bows })
    Object.defineProperty(Vue.prototype, '$log', { value: log })
  }
}

export default Log
export { bows as createLog, log }
