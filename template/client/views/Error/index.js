import { mapState } from 'vuex'

import Title from 'components/Title'

export default {
  name: 'ErrorView',
  computed: mapState([
    'error'
  ]),
  metaInfo () {
    const metaInfo = {
      meta: []
    }
    if (this.error.status) {
      metaInfo.meta.push({ name: 'prerender-status-code', content: this.error.status })
    }
    return metaInfo
  },
  render (h) {
    return (
      <div class='page'>
        <Title>
          {this.error.status && this.error.status !== 404
            ? `Sadly, an error occured (${this.error.status})`
            : 'Page not found (404)'
          }
        </Title>
        <router-link to=\{{ name: 'Home' }}>👈 Back to the overview</router-link>
      </div>
    )
  }
}
