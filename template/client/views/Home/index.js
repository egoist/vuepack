import { mapState } from 'vuex'

import Title from 'components/Title'

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
        <Title level='h1'> H1 Title</Title>
        <p>
          To get started, edit files in <code>./client</code> and save.
        </p>
        <Title level='h2' highlighted>Modified H2 Title</Title>
        {demodata ? demodata.text : 'No text yet'}
      </div>
    )
  }
}
