import { useSelector } from 'react-redux'
import { getBreedInfo } from '../../../redux/features/breeds/breeds.slice'
import * as SC from './photos.style'

const Photos = () => {
  const catInfo = useSelector(getBreedInfo)

  return (
    <>
      <SC.Title>Other Photos</SC.Title>
      <SC.PhostosWrapper>
        {
          catInfo.map((item) => (
            <SC.Img src={item.url} alt="" />
          ))
        }
      </SC.PhostosWrapper>
    </>
  )
}

export default Photos