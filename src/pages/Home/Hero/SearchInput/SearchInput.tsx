import { AiOutlineSearch } from 'react-icons/ai'
import Results from './Results/Results'
import * as SC from './searchInput.style'

const SearchInput = () => {
  return (
    <>
      <SC.SearchInputWrapper>
        <input type="text" placeholder='Enter your breed' />
        <button>
          <AiOutlineSearch size="1.3rem" />
        </button>
        <Results />
      </SC.SearchInputWrapper>
    </>
  )
}

export default SearchInput