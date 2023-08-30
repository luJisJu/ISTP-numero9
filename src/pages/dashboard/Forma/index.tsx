import { JSX, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EShapes, selectShape } from '../selectShape'
import { useForm } from 'react-hook-form'
import Nope from 'nope-validator'
import { nopeResolver } from '@hookform/resolvers/nope'
import useShapes from './useShapes'

const schema = Nope.object().shape({
  field: Nope.string().required()
})

const resolver = nopeResolver(schema)

const Index = (): JSX.Element => {
  const { calculateBox, calculateCircle, calculateRectangle, calculateTriangule } = useShapes()
  const [total, setTotal] = useState(0)
  const { forma } = useParams()
  const currentShape = selectShape(forma as EShapes)
  const form = useForm({
    mode: 'onChange',
    resolver,
    defaultValues: {
      field: '',
      field2: ''
    }
  })

  const { register, handleSubmit, formState } = form
  const { errors } = formState

  const handleOnSubmit = handleSubmit(data => {
    const field = Number(data.field)
    console.log(data, field)
    let total = 0
    switch (forma) {
      case EShapes.BOX:
        total = calculateBox(field)
        break
      case EShapes.CIRCLE:
        total = calculateCircle(field)
        break
      case EShapes.RECTANGLE:
        total = calculateRectangle(field, Number(data.field2))
        break

      case EShapes.TRIANGLE:
        total = calculateTriangule(field, Number(data.field2))
        break
    }
    console.log(data, field)
    setTotal(total)
    console.log(data)
  })

  return (
    <div>
      <header>{currentShape}</header>
      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-field'>
          <input type='number' placeholder='ingrese un valor ' {...register('field')} />
          {errors.field && <marker className='error'>{errors.field.message}</marker>}
        </div>
        {(forma === EShapes.RECTANGLE || forma === EShapes.TRIANGLE) && (
          <div className='form-field'>
            <input type='number' placeholder='ingrese un valor ' {...register('field2')} />
            {errors.field2 && <marker className='error'>{errors.field2.message}</marker>}
          </div>
        )}
        <button className='btn btn-secure'>Calcular</button>
      </form>
      {total !== 0 && <p>El área total es {total}</p>}
    </div>
  )
}

export default Index
