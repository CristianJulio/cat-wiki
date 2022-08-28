import { IBreed } from '../../../../redux/features/breeds/interfaces'
import * as SC from './catSquare.style'

interface CatSquareProps {
  breed: IBreed
}

const CatSquare = ({ breed }: CatSquareProps) => {

  return (
    <SC.CatSquareWrapper to={breed?.id}>
      <SC.CatImage src={breed?.image?.url} alt="" />
      <SC.CatBreed>{breed?.name}</SC.CatBreed>
    </SC.CatSquareWrapper>
  )
}

export default CatSquare