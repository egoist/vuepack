import Counter from 'components/Counter'

export default {
  name: 'HomeView',
  render(h) {
    return (
      <div class="page">
        <Counter />
        <p>
          To get started, edit files in <code>./client</code> and save.
        </p>
      </div>
    )
  }
}
