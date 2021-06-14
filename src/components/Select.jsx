import { SelectButton } from './SelectButton';

export const Select = ({
  languageFilter,
  optionSelect,
  selectOptions,
}) => {

  const optionsToDisplay = selectOptions.map(selectOption => {
    const handleOptionSelect = () => optionSelect(selectOption);
    const languageSelectedClass = languageFilter === selectOption ? 'selected-button' : '';
    return(
      <SelectButton
        className={languageSelectedClass}
        content={selectOption.toUpperCase()}
        handleClick={handleOptionSelect}
      />
    )
  });

  return (
    <div>{optionsToDisplay}</div>
  )
}