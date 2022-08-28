import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  align-items: center;
  background-color: var(--clr-white);
  border-radius: 59px;
  position: relative;
  width: 395px;
  
  input {
    border-radius: 59px;
    border: none;
    font-family: var(--ff-montserrat);
    font-size: 1.2;
    font-weight: var(--fw-500);
    padding: 23px 45px 23px 28px;
    width: 100%;
  }

  button {
    background: none;
    border-radius: 0 59px 59px 0;
    border: none;
    cursor: pointer;
    height: 65px;
    position: absolute;
    right: 0px;
    top: 0;
    width: 15%;
  }
`