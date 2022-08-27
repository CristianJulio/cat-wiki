import { routes } from '../../routes/routes'
import { useRoutes } from 'react-router-dom'
import * as SC from './layout.style'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = () => {
  const element = useRoutes(routes)

  return (
    <SC.MainWrapper>
      <Header />
      {element}
      <Footer />
    </SC.MainWrapper>
  )
}

export default Layout