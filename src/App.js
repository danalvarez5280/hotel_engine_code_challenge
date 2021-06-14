import React, { useEffect, useState } from 'react';
import { apiEndPoint } from './constants';
import { DetailsPage } from './pages/DetailsPage';
import { SearchPage } from './pages/SearchPage';
import { contructApiUrl } from './helpers';

import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentView, setCurrentView] = useState('SEARCH_PAGE');
  const [detailsPageData, setDetailsPageData] = useState(null)
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortByStars, setSortByStars] = useState(false);
  const [isDescending, setDescending] = useState(true);
  const [languageFilter, setLanguageFilter] = useState('');

  const fetchMyAPI = async () => {
    const endPointUrl = contructApiUrl(searchQuery, sortByStars, isDescending, languageFilter);
    let response = await fetch(endPointUrl);
    response = await response.json();
    setSearchResults(response.items);
  };

  useEffect(() => {
    fetchMyAPI();
  }, [searchQuery, sortByStars, isDescending, languageFilter]);

  const COMPONENT_LIST = {
    DETAILS_PAGE: DetailsPage,
    SEARCH_PAGE: SearchPage,
  };

  const PageToDisplay = COMPONENT_LIST[currentView];
  const PageProps = {
    currentSearchTerm,
    detailsPageData,
    isDescending,
    languageFilter,
    searchResults,
    sortByStars,
    setCurrentView,
    setCurrentSearchTerm,
    setDescending,
    setDetailsPageData,
    setLanguageFilter,
    setSearchResults,
    setSearchQuery,
    setSortByStars,
  };

  return (
    <div>
      <PageToDisplay
        {...PageProps}
      />
    </div>
  );
};

export default App;
