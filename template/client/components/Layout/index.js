import './style.scss'

export default {
  name: 'Layout',
  render (h) {
    return (
      <div class='Layout'>
        {this.$slots.default}
      </div>
    )
  }
}
