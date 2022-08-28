import { IBreedResult } from '../../../../../redux/features/breeds/interfaces'
import { Link } from 'react-router-dom'
import * as SC from './results.style'

interface ResultsProps {
  filteredBreeds: IBreedResult[]
}

const Results = ({ filteredBreeds }: ResultsProps) => {
  return (
    <SC.ResultsWrapper>
      <SC.ItemsWrapper>
        {
          filteredBreeds.length
            ? filteredBreeds.map((item) => (
              <SC.Item key={item?.id}>
                <Link to={item?.id}>{item?.name}</Link>
              </SC.Item>
            ))
            : <SC.Item>No hay resultados...</SC.Item>
        }
      </SC.ItemsWrapper>
    </SC.ResultsWrapper>
  )
}

export default Results