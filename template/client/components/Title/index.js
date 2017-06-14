import './style.scss'

import classNameMixin from 'mixins/className'

export default {
  name: 'Title',
  props: ['level', 'highlighted'],
  mixins: [classNameMixin],
  computed: {
    modifiers () {
      // Each modifier has to be registered within props and pushed to the modifier array
      const modifiers = []
      this.highlighted ? modifiers.push('highlighted') : false
      this.level ? modifiers.push(this.level) : false
      return modifiers
    }
  },
  render (h) {
    const Tag = this.level ? `${this.level}` : 'h1' // default h1 tag
    const className = this.className('Title', this.modifiers)

    return (
      <Tag class={className}>
        {this.$slots.default}
      </Tag>
    )
  }
}
