import MainLogoBig from '../../../assets/logos/MainLogoBig'
import * as SC from './hero.style'
import SearchInput from './SearchInput/SearchInput'

const Hero = () => {
  return (
    <SC.HeroWrapper>
      <div>
        <MainLogoBig />
        <SC.HeroText>Get to know more about your cat breed</SC.HeroText>
        <SearchInput />
      </div>
    </SC.HeroWrapper>
  )
}

export default Hero