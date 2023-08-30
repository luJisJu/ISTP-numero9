import { JSX } from 'react'
import 'page/home.scss'
import Nav from '@/components/Nav'

const Index = (): JSX.Element => {
  return (
    <div className='container'>
      <Nav />
      <form className='form'></form>
    </div>
  )
}

export default Index
