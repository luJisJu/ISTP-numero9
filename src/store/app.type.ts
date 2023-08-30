import { IUSerLogin, IUser, IUserRegister } from '@/common'

export interface IStoreDataStore {
  user: IUser
  isLogged: boolean
}
export interface IStoreActionsStore {
  login: (user: IUSerLogin) => void
  register: (user: IUserRegister) => void
  singOut: () => void
}
export type IStore = IStoreDataStore & IStoreActionsStore
