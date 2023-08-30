import { lazyLoad } from './lazyLoad.ts'

export const HomePage = lazyLoad({
  file: import('../pages/home/index.tsx')
})
