import Advantages from './Advantages/Advantages'
import Footer from '../../components/Footer/Footer'
import Hero from './Hero/Hero'
import MostSearched from './MostSearched/MostSearched'

const Home = () => {
  return (
    <>
      <Hero />
      <MostSearched />
      <Advantages />
      <Footer />
    </>
  )
}

export default Home