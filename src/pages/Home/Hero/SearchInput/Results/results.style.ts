import styled from "styled-components";

export const ResultsWrapper = styled.div`
  background-color: var(--clr-white);
  border-radius: 24px;
  display: block;
  margin-top: 17px;
  padding: 0 11px 0 11px;
  position: absolute;
  width: 100%;
  z-index: 100;
`
export const ItemsWrapper = styled.ul`
  list-style-type: none;
  max-height: 220px;
  overflow: auto;
  padding: 11px 0 11px 0;

  ::-webkit-scrollbar {
    background-color: none;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--clr-grey);
    border-radius: 24px;
  }

  ::-webkit-scrollbar-track {
    background: none;
    margin-block: 15px;
  }
`
export const Item = styled.li`
  border-radius: 12px;
  color: var(--clr-black);
  cursor: pointer;
  font-family: var(--ff-montserrat);
  font-size: 1.1rem;
  font-weight: var(--fw-500);
  margin-right: 8px;
  padding: 21px 9px;

  :hover {
    background-color: #9797971A;
  }

  a {
    color: var(--clr-black);
    display: inline-block;
    text-decoration: none;
    width: 100%;
  }
`