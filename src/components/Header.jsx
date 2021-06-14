import { SortSearch } from './SortSearch';
import { SearchInput } from './SearchInput';
import { Select } from './Select';
import { languageOptions } from '../constants';

export const Header = ({
  currentSearchTerm,
  isDescending,
  languageFilter,
  sortByStars,
  setCurrentSearchTerm,
  setDescending,
  setLanguageFilter,
  setSearchQuery,
  setSortByStars,
}) => {

  const searchInputProps = {
    currentSearchTerm,
    setCurrentSearchTerm,
    setSearchQuery,
  };

  const sortSearchProps = {
    sortByStars,
    isDescending,
    setDescending,
    setSortByStars,
  };


  return (
    <div className="header">
      <SearchInput {...searchInputProps} />
      {
        !!currentSearchTerm &&
        <SortSearch {...sortSearchProps} />
      }
      {
        !!currentSearchTerm &&
        <Select
          languageFilter={languageFilter}
          selectOptions={languageOptions}
          optionSelect={setLanguageFilter}
        />
      }

    </div>
  )
};