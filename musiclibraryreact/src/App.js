import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  
  const [songs, setSongs]=useState([]);

  useEffect(()=>{
    getAllSongs();
  },[])

  async function getAllSongs(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/music/');
      console.log(response.data);
    } catch (ex) {
      console.log('Error in getAllSongs API Call!')
    }
    
    // setSongs(response.data)
  }
  
  return (
    <div>
     <button onClick={getAllSongs}>Click</button>
    </div>
  )
}

export default App;
