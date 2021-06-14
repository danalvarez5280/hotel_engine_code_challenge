export const EmptySearch = () => {
  const rootClass = 'empty-search';
  return (
    <div className={rootClass}>
      <h2 className={`${rootClass}__text`}>Please Search For Something!!</h2>
      <img 
        className={`${rootClass}__image`}
        src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
      />
    </div>
  )
};