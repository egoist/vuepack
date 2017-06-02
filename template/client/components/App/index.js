import 'styles/main'

import Layout from 'components/Layout'

export default {
  name: 'App',
  render (h) {
    return (
      <div id='app'>
        <Layout>
          <router-view />
        </Layout>
      </div>
    )
  }
}
