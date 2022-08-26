import * as SC from './footer.style'
import MainLogo from '../../assets/logos/MainLogo'

const Footer = () => {
  return (
    <SC.FooterWrapper>
      <MainLogo color='var(--clr-white)' />
      <SC.Content>&copy; created by <span>CristianJulio</span> - devChanllenge.io  2022</SC.Content>
    </SC.FooterWrapper>
  )
}

export default Footer