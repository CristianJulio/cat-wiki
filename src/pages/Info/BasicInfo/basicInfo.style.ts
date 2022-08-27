import styled from "styled-components";

export const BasicInfoWrapper = styled.section`
  display: flex;
  gap: 115px;
  margin-top: 49px;
`
export const BreedImg = styled.img`
  border-radius: 24px;
  height: 371px;
  object-fit: cover;
  width: 371px;
`
export const Name = styled.h2`
  color: var(--clr-cafe);
  font-family: var(--ff-montserrat);
  font-size: 2.25rem;
  font-weight: var(--fw-600);
  margin-bottom: 30px;
`
export const Description = styled.p`
  font-family: var(--ff-montserrat);
  font-size: 1.1rem;
  font-weight: var(--fw-500);
  line-height: 21.94px;
  margin-bottom: 32px;
  width: 601px;
`