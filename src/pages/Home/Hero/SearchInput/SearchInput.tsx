import { AiOutlineSearch } from 'react-icons/ai'
import { ChangeEvent, useState } from 'react'
import { getBreedsList } from '../../../../redux/features/breeds/breeds.slice'
import { IBreedResult } from '../../../../redux/features/breeds/interfaces'
import { useSelector } from 'react-redux'
import * as SC from './searchInput.style'
import Results from './Results/Results'

const SearchInput = () => {
  const breedsList = useSelector(getBreedsList)
  const [breed, setBreed] = useState<string>("")
  const [filteredBreeds, setFilteredBreeds] = useState<IBreedResult[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const filtered = breedsList.filter((item) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))

    setBreed(value)
    setFilteredBreeds(filtered)
  }

  return (
    <>
      <SC.SearchInputWrapper>
        <input type="text" value={breed} placeholder='Enter your breed' onChange={handleChange} />
        <button><AiOutlineSearch size="1.3rem" /></button>
        {breed.length >= 3 && <Results filteredBreeds={filteredBreeds} />}
      </SC.SearchInputWrapper>
    </>
  )
}

export default SearchInput