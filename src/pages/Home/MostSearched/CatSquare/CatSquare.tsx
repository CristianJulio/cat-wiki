import { IBreed } from '../../../../redux/features/breeds/interfaces'
import { INFO } from '../../../../routes/routes'
import * as SC from './catSquare.style'

interface CatSquareProps {
  breed: IBreed
}

const CatSquare = ({ breed }: CatSquareProps) => {
  console.log({ breed })
  return (
    <SC.CatSquareWrapper to={`${INFO}/${breed.name.toLocaleLowerCase().split(" ").join("-")}`}>
      <SC.CatImage src={breed.image.url} alt="" />
      <SC.CatBreed>{breed.name}</SC.CatBreed>
    </SC.CatSquareWrapper>
  )
}

export default CatSquare