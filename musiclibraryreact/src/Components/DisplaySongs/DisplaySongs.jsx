import React, { useState } from "react";

const DisplaySongs = ({ songs, deleteSong }) => {
    console.log(songs);

    function handleDelete(id, event) {
        event.preventDefault();
        // let id = id;
        console.log(id);
        deleteSong(id);
    }

    return (
        <table className="table-layout">
            <thead>
                <tr>
                    <th >Title</th>
                    <th >Album</th>
                    <th >Artist</th>
                    <th >Genre</th>
                    <th >Release Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => {
                    console.log(songs.id);
                    return (
                        <tr key={index}>
                            <td >{song.title}</td>
                            <td >{song.album}</td>
                            <td >{song.artist}</td>
                            <td >{song.genre}</td>
                            <td >{song.release_date}</td>
                            <td >
                                <button className="button"
                                    value={index}
                                    onClick={(e) => handleDelete(song.id, e)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DisplaySongs;
