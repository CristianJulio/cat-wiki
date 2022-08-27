import styled, { css } from "styled-components";

interface ScoreBarsProps {
  score: number
}

export const ScoreBars = styled.div<ScoreBarsProps>`
  display: flex;
  gap: 9px;

  div {
    width: 60px;
    height: 12px;
    border-radius: 8px;
    background-color: var(--clr-caffe);

    ${({ score }) => css`
      :nth-child(n+${score + 1}) {
        background-color: var(--clr-ligh-caffe);
      }
    `}
    
  }
`