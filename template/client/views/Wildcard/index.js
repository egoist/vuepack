import { mapState } from 'vuex'

import Title from 'components/Title'

export default {
  name: 'WildcardView',
  computed: mapState([
    // 'pages'
  ]),
  created () {
    // this.fetchData()
  },
  methods: {
    fetchData () {
      // this.$store.dispatch('loadPages')
    }
  },
  render (h) {

    return (

    )
  }
}
