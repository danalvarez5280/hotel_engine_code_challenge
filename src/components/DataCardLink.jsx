import { SelectButton } from './SelectButton';
import { CardTitle } from './CardTitle';

export const DataCardLink = ({
  searchResultToDisplay,
  setCurrentView,
  setDetailsPageData,
}) => {
  const rootClass = "data-card";
  const selectDataDetailsPage = () => {
    setCurrentView('DETAILS_PAGE');
    setDetailsPageData(searchResultToDisplay);
  };

  const { name } = searchResultToDisplay;

  return (
    <div className={rootClass}>
      <CardTitle content={name} />
      <SelectButton content='More Info' handleClick={selectDataDetailsPage} />
    </div>
  )
};