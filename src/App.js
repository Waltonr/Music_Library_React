import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import AddNewSongForm from "./Components/NewSong/NewSong";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);
  const [terms, allTerms] = useState([]);
  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/music/');
      setSongs(response.data)
    } catch (error) {
      console.log('Error in MakeGet Request')
    }
  }
  function searchTerm(term){
    if (songs.includes({term}) === true) {
      console.log(songs.term)
      allTerms(songs.term)
      console.log(terms)
    }

  }

  return (
    <div>
      <h1>Music Library</h1>
      <SearchBar searching={searchTerm} />
      <DisplayMusic allTheSongs={songs} />
      <AddNewSongForm  />
    </div>
  );
}

export default App;
