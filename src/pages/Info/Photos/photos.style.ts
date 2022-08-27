import styled from "styled-components";

export const PhostosWrapper = styled.div`
  display: grid;
  grid-gap: 53px 46px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 177px;
`
export const Img = styled.img`
  border-radius: 24px;
  height: 278px;
  object-fit: cover;
  width: 278px;
`
export const Title = styled.h4`
  color: var(--clr-cafe);
  font-family: var(--ff-montserrat);
  font-size: 2.25rem;
  font-weight: var(--fw-600);
  margin-bottom: 40px;
  margin-top: 84px;
`