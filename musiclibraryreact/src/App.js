import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";

function App() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getAllSongs();
    }, []);

    async function getAllSongs() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/music/");
            setSongs(response.data);
        } catch (ex) {
            console.log("Error in getAllSongs API Call!");
        }
    }

    return (
        <div>
            <div>
                {/* <NavBar /> */}
                {/* <SearchBar /> */}
                <DisplaySongs songs={songs} />
                {/* <AddSongForm /> */}
            </div>

            {
                <div>
                    <button onClick={getAllSongs}>Click</button>
                </div>
            }
        </div>
    );
}

export default App;
