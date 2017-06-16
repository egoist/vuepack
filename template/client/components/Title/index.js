import './style.scss'

import classNameMixin from 'mixins/className'

export default {
  name: 'Title',
  props: {
    level: {
      type: Number,
      default: 1
    },
    'modifiers': {
      type: Array,
      default: () => []
    }
  },
  mixins: [classNameMixin],
  computed: {
    computedModifiers () {
      // Each modifier has to be registered within props and pushed to the modifier array
      return [
        `h${this.level}`,
        ...this.modifiers
      ]
    }
  },
  render (h) {
    const Tag = `h${this.level}`
    const className = this.className('Title', this.computedModifiers)

    return (
      <Tag class={className}>
        {this.$slots.default}
      </Tag>
    )
  }
}
