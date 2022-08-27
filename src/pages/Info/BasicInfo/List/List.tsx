import { getBreedInfo } from '../../../../redux/features/breeds/breeds.slice'
import { useSelector } from 'react-redux'
import * as SC from './list.style'
import ScoreBars from './ScoreBars/ScoreBars'

const List = () => {
  const catInfo = useSelector(getBreedInfo)

  return (
    <SC.ListWrapper>
      <SC.Item>
        <p><span>Temperament:</span> {catInfo[0]?.breeds[0]?.temperament}</p>
      </SC.Item>
      <SC.Item>
        <p><span>Origin:</span> {catInfo[0]?.breeds[0]?.origin}</p>
      </SC.Item>
      <SC.Item>
        <p><span>Life Span:</span> {catInfo[0]?.breeds[0]?.life_span}</p>
      </SC.Item>
      <SC.Item>
        <p><span>Adaptability:</span></p> <ScoreBars score={catInfo[0]?.breeds[0]?.adaptability} />
      </SC.Item>
      <SC.Item>
        <p><span>Affection Level:</span></p> <ScoreBars score={catInfo[0]?.breeds[0]?.affection_level} />
      </SC.Item>
      <SC.Item>
        <p><span>Child Frendly:</span></p> <ScoreBars score={catInfo[0]?.breeds[0]?.child_friendly} />
      </SC.Item>
      <SC.Item>
        <p><span>Grooming:</span></p> <ScoreBars score={catInfo[0]?.breeds[0]?.grooming} />
      </SC.Item>
      <SC.Item>
        <p><span>Intelligence:</span></p> <ScoreBars score={catInfo[0]?.breeds[0]?.intelligence} />
      </SC.Item>
      <SC.Item>
        <p><span>Health issues:</span></p> <ScoreBars score={catInfo[0]?.breeds[0]?.health_issues} />
      </SC.Item>
      <SC.Item>
        <p><span>Social needs:</span></p> <ScoreBars score={catInfo[0]?.breeds[0]?.social_needs} />
      </SC.Item>
      <SC.Item>
        <p><span>Stranger friendly:</span></p> <ScoreBars score={catInfo[0]?.breeds[0]?.stranger_friendly} />
      </SC.Item>
    </SC.ListWrapper>
  )
}

export default List