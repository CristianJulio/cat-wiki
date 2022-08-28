import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { MOST } from '../../../routes/routes'
import * as SC from './mostSearched.style'
import CatsBreeds from './CatsBreeds/CatsBreeds'
import CommonLink from '../../../components/CommonLink/CommonLink'

const MostSearched = () => {
  return (
    <SC.MostSearchedWrapper>
      <SC.SectionTitle>Most Searched Breeds</SC.SectionTitle>
      <SC.InnerWrapper>
        <SC.Title>66+ Breeds For you to discover</SC.Title>
        <CommonLink to={MOST}>SEE MORE <MdOutlineArrowRightAlt size="1.5rem" /></CommonLink>
      </SC.InnerWrapper>
      <CatsBreeds />
    </SC.MostSearchedWrapper>
  )
}

export default MostSearched