import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import NavBar from "./Components/NavBar/NavBar";
import AddSongForm from "./Components/AddSongsForm/AddSongForm";

function App() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getAllSongs();
    }, []);

    // add New Song Method
    function addNewSong(newSong) {
        createNewSong(newSong);
        let tempNewSongs = [...songs, newSong];
        setSongs(tempNewSongs);
    }

    // Axios Calls
    async function getAllSongs() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/music/");
            setSongs(response.data);
        } catch(ex) {
            console.log("Error in getAllSongs API Call!");
        }
    }

    async function createNewSong(newSong){
        try {
            let response = await axios.post("http://127.0.0.1:8000/music/", newSong)
        } catch(ex) {
            console.log("Error in createNewSong API Call!");
        }

    }
    return (
        <div>
            <div>
                <NavBar />
                {/* <SearchBar /> */}
                <DisplaySongs songs={songs} />
                <AddSongForm addNewSong={addNewSong} />
            </div>

            {/* {
                <div>
                    <button onClick={getAllSongs}>Click</button>
                </div>
            } */}
        </div>
    );
}

export default App;
