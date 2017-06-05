import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  computed: mapState([
    'demo'
  ]),
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$store.dispatch('loadDemoData')
    }
  },
  render (h) {
    const { demodata } = this.demo

    return (
      <div class='page'>
        <p>
          To get started, edit files in <code>./client</code> and save.
        </p>
        {demodata ? demodata.text : 'No text yet'}
      </div>
    )
  }
}
