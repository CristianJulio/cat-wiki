import { AppDispatch } from '../../redux/store/store'
import { getCatInfoByBreed } from '../../services/breeds/breeds.service'
import { resetBreedInfo } from '../../redux/features/breeds/breeds.slice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BasicInfo from './BasicInfo/BasicInfo'
import Photos from './Photos/Photos'

const Info = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { breed } = useParams()

  useEffect(() => {
    dispatch(getCatInfoByBreed(breed!))

    return (() => { dispatch(resetBreedInfo()) })
  }, [])

  return (
    <div>
      <BasicInfo />
      <Photos />
    </div>
  )
}

export default Info