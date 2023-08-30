import Logo from '@/assets/logo'
import { JSX } from 'react'
import 'sass/components/_nav.scss'

const Nav = (): JSX.Element => {
  return (
    <nav>
      <button>
        <Logo />
      </button>
    </nav>
  )
}

export default Nav
