import React, { useState } from "react";

const SearchBar = ({ searchList }) => {
    
    const [searchTerm, setSearchTerm]=useState('');

    function handleSubmit(event) {
        event.preventDefault(event);
        console.log(searchTerm)
        searchList(searchTerm)
        setSearchTerm("");
    }


    return (
        <div className="searchbar-container">
            <form onSubmit={handleSubmit}>
                <label>Songs Filter</label>
                <input type="text" placeholder="Enter a term to filter by" className="filterInputTextBox" value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}></input>
                <button type="submit" className="button">Filter</button>
            </form>
        </div>
    );
};

export default SearchBar;