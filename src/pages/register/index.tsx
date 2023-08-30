import { JSX } from 'react'
import 'page/login.scss'
import { useForm } from 'react-hook-form'
import Nope from 'nope-validator'
import { nopeResolver } from '@hookform/resolvers/nope'
import { IUserRegister } from '@/common'
import useAppStore from '@/store/useAppStore'

const schema = Nope.object().shape({
  username: Nope.string().required().min(5),
  password: Nope.string().required().min(5),
  email: Nope.string().email().required()
})

const resolver = nopeResolver(schema)

const Index = (): JSX.Element => {
  const handleLogin = useAppStore(store => store.login)
  const defaultValues = useAppStore(store => store.user)

  const hookForm = useForm({
    mode: 'onChange',
    resolver,
    defaultValues
  })
  const { register, formState, reset, handleSubmit } = hookForm
  const { errors } = formState

  const onHandleSubmit = handleSubmit((user: IUserRegister) => {
    handleLogin(user)
    reset(defaultValues)
  })

  return (
    <div className='container'>
      <form className='form' onSubmit={onHandleSubmit}>
        <div className='form-field'>
          <input type='search' {...register('email')} placeholder='ingresa tu email' />
          {errors.email && <marker className='error'>{errors.email.message}</marker>}
        </div>
        <div className='form-field'>
          <input
            type='search'
            {...register('username')}
            placeholder='ingresa tu nombre de usuario'
          />
          {errors.username && <marker className='error'>{errors.username.message}</marker>}
        </div>
        <div className='form-field'>
          <input type='password' {...register('password')} placeholder='***' />
          {errors.password && <marker className='error'>{errors.password.message}</marker>}
        </div>
        <button type='submit' className='btn btn-info'>
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Index
