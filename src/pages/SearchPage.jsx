import { Header } from '../components/Header';
import { DataCardLink } from '../components/DataCardLink';
import { EmptySearch } from '../components/EmptySearch';

export const SearchPage = ({
  currentSearchTerm,
  isDescending,
  languageFilter,
  searchResults,
  sortByStars,
  setCurrentView,
  setCurrentSearchTerm,
  setDescending,
  setDetailsPageData,
  setLanguageFilter,
  setSearchQuery,
  setSortByStars,
}) => {

  const results = () => {
    if (!searchResults || !searchResults.length) return <EmptySearch />;

    const dataCardLinkProps = {
      setCurrentView,
      setDetailsPageData,
    };

    return searchResults.map(searchResult => (
      <DataCardLink
        searchResultToDisplay={searchResult}
        {...dataCardLinkProps}
      />
    ))
  };

  const headerProps = {
    currentSearchTerm,
    isDescending,
    languageFilter,
    sortByStars,
    setCurrentSearchTerm,
    setDescending,
    setLanguageFilter,
    setSearchQuery,
    setSortByStars,
  };

  return (
    <div className="page-layout">
      <Header  {...headerProps}/>
      {results()}
    </div>
  )
};