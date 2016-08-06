import styles from '../css/styles'

export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    handleClick() {
      this.$store.dispatch('INCREMENT')
    }
  },
  render(h) {
    return (
      <div class={styles.counter} on-click={this.handleClick}>
        {this.count}
      </div>
    )
  }
}
