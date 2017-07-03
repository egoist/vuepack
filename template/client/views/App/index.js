import 'styles/main'

import Layout from 'components/Layout'
import Error from 'views/Error'

import { mapState } from 'vuex'

export default {
  name: 'App',
  metaInfo: {
    title: '{{ name }}',
    titleTemplate: '%s - {{ name }}'
  },
  created () {
    this.$store.dispatch('loadInitialData')
  },
  computed: mapState([
    'error'
  ]),
  watch: {
    '$route': 'resetErrors'
  },
  methods: {
    resetErrors () {
      this.$store.dispatch('resetError')
    }
  },
  render (h) {
    return (
      <div class='App' id='app'>
        <Layout>
          <transition name='u-anim-fade-delayed'>
            { this.error.status
              ? (<Error />)
              : (<router-view />)
            }
          </transition>
        </Layout>
      </div>
    )
  }
}
