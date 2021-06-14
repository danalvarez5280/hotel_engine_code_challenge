import { SelectButton } from '../components/SelectButton';

export const DetailsPage = ({ detailsPageData, setCurrentView }) => {
  const rootClass = "detail-page";

  const {
    description,
    language,
    name,
    owner: { login },
    score,
    url,
  } = detailsPageData;


  return (
    <div className={rootClass}>
      <h3 className={`${rootClass}__title`}>{name}</h3>
      <p className={`${rootClass}__language`}>Language: {language}</p>
      <p className={`${rootClass}__description`}>{description}</p>
      <p className={`${rootClass}__stars`}>Star Total: {score}</p>
      <a className={`${rootClass}__link`} href={url} target="_blank">Link to More Info</a>
      <h3 className={`${rootClass}__title`}>Owned By: {login}</h3>
      <SelectButton content="Back to Search Page" handleClick={() => setCurrentView('SEARCH_PAGE')} />
    </div>
  )
};