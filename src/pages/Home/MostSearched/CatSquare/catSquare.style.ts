import { Link } from "react-router-dom";
import styled from "styled-components";

export const CatSquareWrapper = styled(Link)`
  text-decoration: none;
`
export const ImageWrapper = styled.div`
  border-radius: 24px;
  overflow: hidden;
`
export const CatImage = styled.img`
  border-radius: 24px;
  height: 220px;
  object-fit: cover;
  width: 220px;

  transition: transform .3s ease;
  
  :hover {
    transform: scale(1.1);
  }
`
export const CatBreed = styled.p`
  color: var(--clr-caffe);
  font-family: var(--ff-montserrat);
  font-size: 1.2rem;
  font-weight: var(--fw-600);
  margin-top: 20px
`