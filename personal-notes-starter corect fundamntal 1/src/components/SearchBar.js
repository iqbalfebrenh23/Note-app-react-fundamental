import React from "react";
import PropTypes from "prop-types";

function SearchBar ({id, keywordChange}) {
    return(
        <input className="search-bar" type="text" placeholder="Cari Catatan Anda Disini"
        value={id} onChange={(event) => keywordChange(event.target.value)}
        />
    )
}

SearchBar.propTypes = {
    id: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;