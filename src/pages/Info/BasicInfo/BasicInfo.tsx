import { getBreedInfo } from '../../../redux/features/breeds/breeds.slice'
import { useSelector } from 'react-redux'
import * as SC from './basicInfo.style'
import List from './List/List'

const BasicInfo = () => {
  const catInfo = useSelector(getBreedInfo)

  return (
    <SC.BasicInfoWrapper>
      <SC.ImageWrapper>
        <SC.BreedImg src={catInfo[0]?.url} alt="" />
      </SC.ImageWrapper>
      <div>
        <SC.Name>{catInfo[0]?.breeds[0]?.name}</SC.Name>
        <SC.Description>{catInfo[0]?.breeds[0]?.description}</SC.Description>
        <List />
      </div>
    </SC.BasicInfoWrapper>
  )
}

export default BasicInfo