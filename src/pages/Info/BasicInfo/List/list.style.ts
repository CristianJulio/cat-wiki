import styled from "styled-components";

export const ListWrapper = styled.ul`
  display: grid;
  grid-gap: 32px;
`
export const Item = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 511px;

  p {
    color: var(--clr-black);
    font-family: var(--ff-montserrat);
    font-size: 1rem;
    font-weight: var(--fw-500);

    span {
      font-weight: var(--fw-700);
    }
  }
`