import { Suspense } from 'react'
// import { HomePage, NotFountPage } from '@/utils'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/utils'
import { Loader } from './pages'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
