import { lazyLoad } from './lazyLoad.ts'

export const HomePage = lazyLoad({
  file: import('../pages/home/index.tsx')
})

export const LoginPage = lazyLoad({
  file: import('../pages/login/index.tsx')
})

export const RegisterPage = lazyLoad({
  file: import('../pages/register/index.tsx')
})

export const DashboardPage = lazyLoad({
  file: import('../pages/dashboard/index.tsx')
})
