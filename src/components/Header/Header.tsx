import * as SC from './header.style'
import MainLogo from '../../assets/logos/MainLogo'
import { HOME } from '../../routes/routes'

const Header = () => {
  return (
    <SC.HeaderWrapper to={HOME}>
      <MainLogo />
    </SC.HeaderWrapper>
  )
}

export default Header