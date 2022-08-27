import * as SC from './scoreBars.style'

interface ScoreBarsProps {
  score: number
}

const ScoreBars = ({ score }: ScoreBarsProps) => {
  return (
    <SC.ScoreBars score={score}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SC.ScoreBars>
  )
}

export default ScoreBars