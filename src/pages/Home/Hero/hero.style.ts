import catHeroBig from '../../../assets/images/cat_hero_big.png'
import styled from "styled-components";

export const HeroWrapper = styled.div`
  background-image: url(${catHeroBig});
  background-size: cover;
  border-radius: 42px 42px 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 540px;
  margin-top: 36px;
  place-items: center;

  & > div {
    display: grid;
  }
`
export const HeroText = styled.p`
  color: var(--clr-white);
  font-family: var(--ff-montserrat);
  font-size: 24px;
  font-weight: var(--fw-500);
  margin: 12px 0 52px 0;
  width: 371px;  
`