import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import AddNewSongForm from "./Components/NewSong/NewSong";
import SearchBar from "./Components/SearchBar/SearchBar";
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [terms, setAllTerms] = useState([]);

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
      setAllTerms(songs.term)
      console.log(terms)
    }
    // "songs" filter based upon terms

  }
  
  useEffect(() => {
    addNewSong();
  }, [])

  async function addNewSong(newSong){
    try{
      let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
      await getAllSongs();
      setAllTerms(response.data);
    } catch (error) {
      console.log('Error in Axios Post Request')
    }

  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box'>
            <div className='ml-sb'>
              <h1>Music Library</h1>
            </div>
            <div className='ml-sb'>
              <SearchBar searching={searchTerm} />
            </div>
            <DisplayMusic allTheSongs={songs} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box2'>
            <AddNewSongForm addNewSongProperty={addNewSong} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
