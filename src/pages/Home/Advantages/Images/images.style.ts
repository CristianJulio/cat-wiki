import styled from "styled-components";

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 28px;

  & > div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    gap: 28px;

    img {
      :first-child {
        height: 167px;
        width: 273px;
      }

      :last-child {
        height: 293px;
        width: 195px;
      }
    }
  }

  & > img {
    height: 385px;
    width: 238px;
  }
`