import { HOME } from '../../../routes/routes'
import { IBreed } from '../../../redux/features/breeds/interfaces'
import * as SC from './item.style'

interface ItemProps {
  breed: IBreed
}

const Item = ({ breed }: ItemProps) => {
  return (
    <SC.BreedWrapper to={`${HOME}${breed.id}`}>
      <SC.Img src={breed?.image?.url} alt="" />
      <div>
        <SC.BreedName>{breed?.name}</SC.BreedName>
        <SC.Description>{breed?.description}</SC.Description>
      </div>
    </SC.BreedWrapper>
  )
}

export default Item