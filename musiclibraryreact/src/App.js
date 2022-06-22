import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import NavBar from "./Components/NavBar/NavBar";
import AddSongForm from "./Components/AddSongsForm/AddSongForm";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getAllSongs();
    }, []);

    // add New Song Method
    function addNewSong(newSong) {
        createNewSong(newSong);
        getAllSongs();
    }

    function searchList(searchTerm) {
        console.log(songs);
        let filteredSongs = songs.filter(function (song) {
            if (
                song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.release_date.includes(searchTerm)
            ) {
                return true;
            }
        });
        console.log(filteredSongs);
        setSongs(filteredSongs);
    }

    // Axios Calls
    async function getAllSongs() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/music/");
            setSongs(response.data);
        } catch (ex) {
            console.log("Error in getAllSongs API Call!");
        }
    }

    async function createNewSong(newSong) {
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/music/",
                newSong
            );
            getAllSongs();
        } catch (ex) {
            console.log("Error in createNewSong API Call!");
        }
    }

    async function deleteSong(id) {
        console.log(id);
        try {
            await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
            getAllSongs();
        } catch (ex) {
            console.log("Error in DeleteSong API Call");
        }
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main className="main-container">
                <div className="main-container">
                    <SearchBar searchList={searchList} />
                    <button
                        className="button"
                        style={{ "align-self": "flex-start" }}
                        onClick={getAllSongs}
                    >
                        Reset Filters
                    </button>
                    <DisplaySongs songs={songs} deleteSong={deleteSong} />
                    <AddSongForm addNewSong={addNewSong} />
                </div>
            </main>
        </div>
    );
}

export default App;
