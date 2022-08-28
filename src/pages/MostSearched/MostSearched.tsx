import { getTop10 } from '../../redux/features/breeds/breeds.slice'
import { useSelector } from 'react-redux'
import * as SC from './mostSearched.style'
import Item from './Item/Item'

const MostSearched = () => {
  const top10 = useSelector(getTop10)

  return (
    <SC.MostSearchedWrapepr>
      <SC.Title>Top 10 most searched breeds</SC.Title>
      <SC.ItemsWrapper>
        {
          top10.map((breed) => (
            <Item key={breed.id} breed={breed} />
          ))
        }
      </SC.ItemsWrapper>
    </SC.MostSearchedWrapepr>
  )
}

export default MostSearched