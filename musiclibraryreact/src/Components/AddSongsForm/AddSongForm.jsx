import React, { useState } from 'react';

const AddSongForm = ({addNewSong}) => {
    const [title, setTitle]=useState('');
    const [album, setAlbum]=useState('');
    const [artist, setArtist]=useState('');
    const [genre, setGenre]=useState('');
    const [release_Date, setRelease_Date]=useState('');
    const [likes, setLikes]=useState(0);

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            release_date: release_Date,
            likes: likes
        };
        console.log(newSong);
        addNewSong(newSong);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange = {(event)=>setTitle(event.target.value)} />
            </div>
            <div>
                <label>Album</label>
                <input type="text" value={album} onChange = {(event)=>setAlbum(event.target.value)} />
            </div>
            <div>
                <label>Artist</label>
                <input type="text" value={artist} onChange = {(event)=>setArtist(event.target.value)}></input>
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre} onChange = {(event)=>setGenre(event.target.value)}></input>
            </div>
            <div>
                <label>Release Date</label>
                <input type="date" value={release_Date} onChange = {(event)=>setRelease_Date(event.target.value)}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
     );
}
 
export default AddSongForm;