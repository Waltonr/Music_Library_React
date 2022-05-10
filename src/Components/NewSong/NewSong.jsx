import React, { useState } from "react";

const AddNewSongForm = (props) => {
    const [title, setTitle] = useState(' ');
    const [artist, setArtist] = useState(' ')
    const [album, setAlbum] = useState(' ')
    const [genre, setGenre] = useState(' ')
    const [release_date, setReleaseDate] = useState(' ')

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date
        };
        console.log(newSong)
        props.addNewSongProperty(newSong)

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Add a Song</h2>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <label>Artist</label>
                <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div>
                <label>Album</label>
                <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <div>
                <label>Release Date</label>
                <input type="text" value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddNewSongForm;

