const useShapes = () => {
  const calculateBox = (l: number) => {
    return l * l
  }

  const calculateTriangule = (b: number, h: number) => {
    return (b * h) / 2
  }

  const calculateCircle = (r: number) => {
    return Math.PI * r * r
  }

  const calculateRectangle = (b: number, h: number) => {
    return b * h
  }

  return { calculateBox, calculateTriangule, calculateCircle, calculateRectangle }
}

export default useShapes
