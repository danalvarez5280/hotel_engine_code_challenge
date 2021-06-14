export const SelectButton = ({ className, content, handleClick }) => {
  const rootClass = "select-button"
  return (
    <button
      className={`${rootClass} ${className}`}
      onClick={handleClick}
    >
      <p className={`${rootClass}__text`}>{content}</p>
    </button>
  )
};