import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClearBtn, clearUsers, setAlert, searchUsers }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert("Please Enter A Name", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="from" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users.."
          value={text}
          onChange={onChange}
        />
        <input
          className="btn btn-dark btn-block"
          type="submit"
          value="Search"
        />
      </form>
      {showClearBtn && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearBtn: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
