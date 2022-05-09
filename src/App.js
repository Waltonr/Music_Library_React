import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    console.log(getAllSongs)
  }, [])

  async function getAllSongs(){

    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);

  }


  return (
    <div>
      <h2>Hello</h2>
     <DisplayMusic getAllSongsProperty={songs} />
    </div>
  );
}

export default App;
