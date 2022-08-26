import styled from "styled-components";

export const FooterWrapper = styled.footer`
  align-items: center;
  background-color: var(--clr-black);
  border-radius: 42px 42px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 27px 32px 35px 108px;
  width: 100%;
`
export const Content = styled.p`
  color: var(--clr-white);
  font-family: var(--ff-montserrat);
  font-size: 1.1rem;
  font-weight: var(--fw-400);
  line-height: 20px;

  span {
    font-weight: var(--fw-700);
    text-decoration: underline;
  }
`