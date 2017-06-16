import './style.scss'

import classNameMixin from 'mixins/className'

export default {
  name: 'Title',
  props: ['level', 'modifiers'],
  mixins: [classNameMixin],
  computed: {
    computedModifiers () {
      // Each modifier has to be registered within props and pushed to the modifier array
      const modifiers = this.modifiers ? this.modifiers : []
      this.level ? modifiers.unshift(this.level) : false
      return modifiers
    }
  },
  render (h) {
    const Tag = this.level ? `h${this.level}` : 'h1' // default h1 tag
    const className = this.className('Title', this.computedModifiers)

    return (
      <Tag class={className}>
        {this.$slots.default}
      </Tag>
    )
  }
}
