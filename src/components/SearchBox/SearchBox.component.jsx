import './SearchBox.styles.css';

const SearchBox = ({ onSearchChangeHandler }) => {
  return (
    <input
      className='search-box'
      type='search'
      placeholder='Search monsters'
      onChange={(event) => onSearchChangeHandler(event)}
    />
  );
};

export default SearchBox;
