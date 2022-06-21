import React, { useState } from 'react';

const DisplaySongs = ({songs}) => {
    console.log(songs)

    return (
        <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
        </thead>
        <tbody>
        {songs.map((song, index)=>{
                return (
                    <tr key={index}>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                    </tr>
                )
            })}
            
        </tbody>
    </table>


     );
}
 
export default DisplaySongs;