import styled from "styled-components";

export const MostSearchedWrapper = styled.section`
  background-color: var(--clr-ligh-caffe);
  border-radius: 0 0 42px 42px;
  padding: 40px 108px 98px 108px;
`
export const SectionTitle = styled.h4`
  color: var(--clr-caffe);
  font-family: var(--ff-montserrat);
  font-size: 1.2rem;
  font-weight: var(--fw-500);
  position: relative;

  ::after {
    content: '';
    background-color: var(--clr-caffe);
    border-radius: 77px;
    bottom: -15px;
    height: 5px;
    left: 0;
    position: absolute;
    width: 65px;
  }
`
export const InnerWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`
export const Title = styled.h3`
  color: var(--clr-caffe);
  font-family: var(--ff-montserrat);
  font-size: 3rem;
  font-weight: var(--fw-700);
  margin: 51px 0 46px 0;
  width: 537px;
`