import { SelectButton } from './SelectButton';

export const SearchInput = ({
  currentSearchTerm,
  setCurrentSearchTerm,
  setSearchQuery,
}) => {
  const handleClick = () => {
    setSearchQuery(currentSearchTerm);
  };

  return (
    <div className="search-input__container">
      <input
        className="search-input"
        placeholder="Search Github for Something"
        type="text"
        onChange={(e) => setCurrentSearchTerm(e.target.value)}
      />
      <SelectButton content="Search" handleClick={handleClick} />
    </div>
  )
};