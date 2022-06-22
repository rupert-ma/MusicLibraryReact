import React, { useState } from "react";

const SearchBar = ({songs, searchList}) => {
    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [release_Date, setRelease_Date] = useState("");
    const [searchTerm, setSearchTerm]=useState('');
    const [filterValue, setFilterValue]=useState('');

    function handleSubmit(event) {
        event.preventDefault(event);
        console.log(searchTerm)
        searchList(searchTerm)
    }


    return (
        <div className="searchbar-container">
            <form onSubmit={handleSubmit}>
                {/* <select onChange={handleSubmit}>
                    <option value={title} onChange={(event)=>setTitle(event.target.value)}>Title</option>
                    <option value={album} onChange={(event)=>setAlbum(event.target.value)}>Album</option>
                    <option value={artist} onChange={(event)=>setArtist(event.target.value)}>Artist</option>
                    <option value={genre} onChange={(event)=>setGenre(event.target.value)}>Genre</option>
                    <option value={release_Date} onChange={(event)=>setRelease_Date(event.target.value)}>Release Date</option>
                </select> */}
                <label>Songs Filter</label>
                <input type="text" placeholder="Enter a term to filter by" className="filterInputTextBox" value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}></input>
                <button type="submit" className="button">Filter</button>
                <button className="button">Reset Filters</button>
            </form>
        </div>
    );
};

export default SearchBar;