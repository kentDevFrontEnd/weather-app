import React, { useState } from "react";

export default function Search({ onSubmitForm }) {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    let value = e.target.value;
    console.log(value);
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(query);
  };
  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleQuery}
        className="search-bar"
        placeholder="Search ..."
      />
      <button className="submit">Find</button>
    </form>
  );
}
