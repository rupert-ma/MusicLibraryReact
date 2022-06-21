import React, { useState } from "react";

const Song = ({ song }) => {
    return (
        <li>
            <div>
                <p>{song.title}</p>
            </div>
            <div>
                <p>{song.album}</p>
            </div>
            <div>
                <p>{song.artist}</p>
            </div>
            <div>
                <p>{song.genre}</p>
            </div>
            <div>
                <p>{song.release_date}</p>
            </div>
        </li>
    );
};

export default Song;
