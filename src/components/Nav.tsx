import Logo from '@/assets/logo'
import useAppStore from '@/store/useAppStore'
import { JSX } from 'react'
import { Link } from 'react-router-dom'
import 'sass/components/_nav.scss'

const Nav = (): JSX.Element => {
  const isLogged = useAppStore(state => state.isLogged)
  const singOut = useAppStore(state => state.singOut)

  return (
    <nav>
      <Link to='/'>
        <button>
          <Logo />
        </button>
      </Link>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        {!isLogged && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </>
        )}
        {isLogged && (
          <>
            <li>
              <Link to='/dashboard'>dashboard</Link>
            </li>
            <li>
              <button className='btn btn-error' onClick={() => singOut()}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
      <br></br>
    </nav>
  )
}

export default Nav
