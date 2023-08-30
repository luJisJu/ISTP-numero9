export interface IUser {
  username: string
  email: string
  password: string
}

export interface IUserRegister extends IUser {}
export interface IUSerLogin extends Omit<IUser, 'username'> {}
