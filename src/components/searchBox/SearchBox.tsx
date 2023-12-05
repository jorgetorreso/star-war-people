import { MagnifyingGlass } from "@phosphor-icons/react";
import "./SearchBox.scss";

interface ISearchBoxProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onBlur?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function SearchBox({
  placeholder = "Buscar...",
  onBlur = () => {},
  onChange,
  value,
}: ISearchBoxProps) {
  return (
    <form className="SearchBox">
      <button className="SearchBox__button">
        <MagnifyingGlass size={18} weight="light" />
      </button>
      <input
        type="search"
        name="focus"
        placeholder={placeholder}
        id="searchBox-input"
        value={value}
        className="SearchBox__input"
        onBlur={onBlur}
        onChange={onChange}
      />
    </form>
  );
}

export default SearchBox;
