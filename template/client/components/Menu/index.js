import { mapState, mapMutations } from 'vuex'

import './style.scss'

export default {
  name: 'Menu',
  computed: mapState({
    open: state => state.ui.menuOpen
  }),
  methods: mapMutations({
    toggleMenu: 'TOGGLE_MENU'
  }),
  render (h) {
    const { open, toggleMenu } = this
    return (
      open
      ? <div class='Menu'>
          <router-link to=\{{ name: 'home' }} exact>
            <h2 on-click={toggleMenu} class='Menu__title'>Contemporary Art<br /> Switzerland</h2>
          </router-link>
        </div>
      : null
    )
  }
}
