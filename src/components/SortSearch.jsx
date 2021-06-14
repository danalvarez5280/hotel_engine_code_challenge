import { SelectButton } from './SelectButton';

export const SortSearch = ({
  sortByStars,
  isDescending,
  setDescending,
  setSortByStars,
}) => {
  
  const handleStarsSort = () => {
    setSortByStars(!sortByStars)
  };
  const handleDescendingOrder = () => {
    setDescending(!isDescending)
  };
  const ascendingOrDescending = isDescending ? 'Most to Least' : 'Least to Most';
  const sortingByStarsClassOption = sortByStars ? 'selected-button' :  '';

  const renderOrderButton = () => {
    if (sortByStars){
      return (
        <SelectButton
          content={ascendingOrDescending}
          handleClick={handleDescendingOrder}
        />
      )
    }
  };
  return (
    <div className="sort-search">
      <SelectButton
        className={sortingByStarsClassOption}
        content="Sort By Stars"
        handleClick={handleStarsSort}
      />
      {renderOrderButton()}
    </div>
  )
};