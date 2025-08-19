export default function Search({ placeholder }) {
  return (
    <div className="search">
      <i className="search__icon fa fa-search" aria-hidden="true"></i>

      <input className="search__input" type="text" placeholder={placeholder} />
    </div>
  );
}
