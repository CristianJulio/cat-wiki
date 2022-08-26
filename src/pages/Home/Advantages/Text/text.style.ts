import styled from "styled-components";

export const TextWrapper = styled.div`
  display: grid;
  grid-gap: 66px;
  margin-top: 76px;
`
export const Title = styled.h2`
  color: var(--clr-caffe);
  font-family: var(--ff-montserrat);
  font-size: 3rem;
  font-weight: var(--fw-700);
  position: relative;
  width: 430px;
  
  ::before {
    content: '';
    background-color: var(--clr-caffe);
    border-radius: 77px;
    height: 3px;
    left: 0;
    position: absolute;
    top: -20px;
    width: 67px;
  }
`
export const Parrahraph = styled.p`
  color: var(--clr-caffe);
  font-family: var(--ff-montserrat);
  font-size: 1.1rem;
  font-weight: var(--fw-500);
  width: 447px;
`