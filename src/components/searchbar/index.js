import { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import "./styles.css";

function SearchBar() {
  const [value, setValue] = useState("");
  const history = useHistory();
  return (
    <div className="searchbar">
      <form
        className="searchbar-form"
        onSubmit={(ev) => {
          ev.preventDefault();

          value ? history.push("/search=" + value) : history.push("/");
        }}
        onReset={() => setValue("")}
      >
        <input
          placeholder="i am searching for"
          className="searchbar-input"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        ></input>
        {value ? (
          <button className="searchbar-reset" type="reset">
            reset
          </button>
        ) : null}
        <button className="searchbar-search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
