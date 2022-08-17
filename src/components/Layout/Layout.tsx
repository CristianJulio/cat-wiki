import * as SC from './layout.style'
import Header from '../Header/Header'
import Home from '../../pages/Home/Home'

const Layout = () => {
  return (
    <SC.MainWrapper>
      <Header />
      <Home />
    </SC.MainWrapper>
  )
}

export default Layout