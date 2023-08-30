import { lazy } from 'react'

interface ILazyLoad {
  file: Promise<any>
  namedExport?: string | null
}

const lazyLoad = ({ file, namedExport = null }: ILazyLoad) => {
  return lazy(async () => {
    const promise = file
    if (namedExport === null) {
      return promise
    }
    return promise.then(module => ({ default: module[namedExport] }))
  })
}

export { lazyLoad }
