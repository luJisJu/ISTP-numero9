import Box from '@/assets/Box'
import Circle from '@/assets/Circle'
import Rectangle from '@/assets/Rectangle'
import Triangle from '@/assets/Triangle'

export const shapes = {
  box: <Box />,
  circle: <Circle />,
  triangle: <Triangle />,
  rectangle: <Rectangle />
}

export enum EShapes {
  BOX = 'box',
  CIRCLE = 'circle',
  TRIANGLE = 'triangle',
  RECTANGLE = 'rectangle'
}

export const selectShape = (shape: EShapes) => {
  const currentShape = Object.entries(shapes).find(([value, fc]) => {
    return value === shape && <div key={value}>{fc}</div>
  })
  if (!currentShape) return [shape, shapes.box]
  return currentShape[1]
}
