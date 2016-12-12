import style from './style.css'

export default {
  methods: {
    increment() {
      this.$store.commit('INCREMENT')
    },
    decrement() {
      this.$store.commit('DECREMENT')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  },
  render(h) {
    return (
      <div class="counter-wrapper">
        <div class={style.counter}>
          {this.$store.state.count}
        </div>
        <button on-click={this.increment}>Increment</button>
        <button on-click={this.decrement}>Decrement</button>
        <button on-click={this.incrementAsync}>Increment Async</button>
      </div>
    )
  }
}
