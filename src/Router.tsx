import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardPage, HomePage, LoginPage, RegisterPage } from '@/utils'
import { Loader } from './pages'
import Nav from './components/Nav'
import ProtectedRoute from './utils/protectedRoute'
import Forma from '@/pages/dashboard/Forma'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<DashboardPage />}>
              <Route path=':forma' element={<Forma />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute elseTo={true} />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
