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
            <SC.ImageWrapper>
              <SC.Img key={item.id} src={item.url} alt="" />
            </SC.ImageWrapper>
          ))
        }
      </SC.PhostosWrapper>
    </>
  )
}

export default Photos