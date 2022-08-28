import { HOME } from '../../routes/routes'
import * as SC from './header.style'
import MainLogo from '../../assets/logos/MainLogo'

const Header = () => {
  return (
    <SC.HeaderWrapper to={HOME}>
      <MainLogo />
    </SC.HeaderWrapper>
  )
}

export default Header