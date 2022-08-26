import * as SC from './images.style'
import image1 from '../../../../assets/images/image_1.png'
import image2 from '../../../../assets/images/image_2.png'
import image3 from '../../../../assets/images/image_3.png'

const Images = () => {
  return (
    <SC.ImagesWrapper>
      <div>
        <img src={image2} alt="some cat" />
        <img src={image1} alt="another cat" />
      </div>
      <img src={image3} alt="one more cat" />
    </SC.ImagesWrapper>
  )
}

export default Images