import style from './style.css'

export default {
  methods: {
    handleClick() {
      this.$store.dispatch('incrementAsync')
    }
  },
  render(h) {
    return (
      <div class={style.counter} on-click={this.handleClick}>
        {this.$store.state.count}
      </div>
    )
  }
}
