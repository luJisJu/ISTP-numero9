import { shapes } from './selectShape'
import { Link, Outlet } from 'react-router-dom'
import { JSX } from 'react'
import 'page/dashboard.scss'

const Index = (): JSX.Element => {
  return (
    <section className='container'>
      <h2>Dashboard</h2>
      <nav className='vertical-nav'>
        {Object.entries(shapes).map(([value, fc]) => {
          return (
            <Link to={`/dashboard/${value}`} key={value + 'das'}>
              {fc}
            </Link>
          )
        })}
      </nav>
      <div>
        <Outlet />
      </div>
    </section>
  )
}

export default Index
