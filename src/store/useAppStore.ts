import { StateCreator, create } from 'zustand'
import { IStore } from './app.type'
import { persist } from 'zustand/middleware'

const defaultUSer = {
  username: '',
  email: '',
  password: ''
}

const state: StateCreator<IStore> = (set, get) => ({
  user: defaultUSer,
  isLogged: false,
  login(user) {
    set({ user: { ...get().user, ...user }, isLogged: true })
  },
  register(user) {
    set({ user, isLogged: false })
  },
  singOut() {
    set({ user: defaultUSer, isLogged: false })
  }
})
const useAppStore = create(persist<IStore>(state, { name: 'appStorage' }))

export default useAppStore
