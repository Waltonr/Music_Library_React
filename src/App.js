import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import AddNewSongForm from "./Components/NewSong/NewSong";

function App() {
  const [songs, allSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){

    let response = await axios.get('http://127.0.0.1:8000/music/');
    allSongs(response.data)
  }


  return (
    <div>
      <h2>Hello</h2>
      <DisplayMusic getAllSongsProperty={songs} />
      <AddNewSongForm />
    </div>
  );
}

export default App;
