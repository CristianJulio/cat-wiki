import { Link } from "react-router-dom"
import styled from "styled-components"

export const BreedWrapper = styled(Link)`
  color: var(--clr-caffe);
  display: grid;
  grid-gap: 46px;
  grid-template-columns: 170px 888px;
  text-decoration: none;
`
export const Img = styled.img`
  border-radius: 24px;
  height: 170px;
  object-fit: cover;
  width: 170px;
`
export const BreedName = styled.h3`
  color: var(--clr-caffe);
  font-family: var(--ff-montserrat);
  font-size: 2.25rem;
  font-weight: var(--fw-600);
  margin-bottom: 20px;
`
export const Description = styled.p`
  color: var(--clr-caffe); 
  font-family: var(--ff-montserrat);
  font-size: 1.1rem;
  font-weight: var(--fw-500);
`