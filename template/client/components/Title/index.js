import kebabCase from 'lodash.kebabcase'
import classNameMixin from 'mixins/className'

import './style.scss'

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
    },
    richText: {
      type: String
    },
    id: {
      type: String
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
    },
    idAttr () {
      return this.id ? kebabCase(this.id) : ''
    }
  },
  render (h) {
    const Tag = `h${this.level}`
    const className = this.className('Title', this.computedModifiers)
    if (this.richText) {
      return (
        // Use richText prop to deal with HTML elements (like <br />)
        <Tag class={className} id={this.idAttr} domPropsInnerHTML={this.richText}></Tag>
      )
    } else {
      return (
        <Tag class={className} id={this.idAttr} >{this.$slots.default}</Tag>
      )
    }
  }
}
