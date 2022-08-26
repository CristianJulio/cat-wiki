import { MdOutlineArrowRightAlt } from 'react-icons/md'
import * as SC from './text.style'
import CommonLink from '../../../../components/CommonLink/CommonLink'

const Text = () => {
  return (
    <SC.TextWrapper>
      <SC.Title>Why should you have a cat?</SC.Title>
      <SC.Parrahraph>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</SC.Parrahraph>
      <CommonLink to='#'>READ MORE <MdOutlineArrowRightAlt size="1.5rem" /></CommonLink>
    </SC.TextWrapper>
  )
}

export default Text