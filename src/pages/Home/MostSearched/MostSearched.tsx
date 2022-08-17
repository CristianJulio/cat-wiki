import { MdOutlineArrowRightAlt } from 'react-icons/md'
import * as SC from './mostSearched.style'
import CatsBreeds from './CatsBreeds/CatsBreeds'

const MostSearched = () => {
  return (
    <SC.MostSearchedWrapper>
      <SC.SectionTitle>Most Searched Breeds</SC.SectionTitle>
      <SC.InnerWrapper>
        <SC.Title>66+ Breeds For you to discover</SC.Title>
        <SC.Link href="#">SEE MORE <MdOutlineArrowRightAlt size="1.5rem" /> </SC.Link>
      </SC.InnerWrapper>
      <CatsBreeds />
    </SC.MostSearchedWrapper>
  )
}

export default MostSearched