import { mapMutations, mapState } from 'vuex'

import './style.scss'

export default {
  name: 'Burger',
  methods: mapMutations({
    toggleMenu: 'TOGGLE_MENU'
  }),
  computed: mapState({
    isOpen: state => state.ui.menuOpen
  }),
  render (h) {
    const { isOpen, toggleMenu } = this
    return (
      <button type='button' class={'Burger' + (isOpen ? ' is-open' : '')} onClick={toggleMenu} aria-label='Open Menu'>
        <div class='Burger__burger'>
        </div>
      </button>
    )
  }
}
