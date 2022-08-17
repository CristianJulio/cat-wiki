import { AppDispatch } from '../../../../redux/store/store'
import { getBreeds } from '../../../../redux/features/breeds/breeds.slice'
import { getCatsBreeds } from '../../../../services/breeds/breeds.service'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as SC from './catsBreeds.style'
import CatSquare from '../CatSquare/CatSquare'

const CatsBreeds = () => {
  const dispatch = useDispatch<AppDispatch>()
  const breeds = useSelector(getBreeds)

  useEffect(() => {
    dispatch(getCatsBreeds())
  }, [])

  return (
    <SC.CatsBreewsWrapper>
      {
        breeds.length
          ? (
            breeds.map((breed) => (
              <CatSquare key={breed.id} breed={breed} />
            ))
          )
          : <p>No breeds to show...</p>
      }
    </SC.CatsBreewsWrapper>
  )
}

export default CatsBreeds