import 'styles/main'

import './style.scss'

export default {
  name: 'App',
  render (h) {
    return (
      <div class='App' id='app'>
        <router-view></router-view>
      </div>
    )
  }
}
