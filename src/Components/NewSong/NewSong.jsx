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
        props.addNewPostProperty(newSong)

    }

    return ( 
        <form>
            <h2>Add a Song</h2>
            <div>
                <label>Title</label>
                <input type="text" value={title}/>
            </div>
            <div>
                <label>Artist</label>
                <input type="text" value={artist}/>
            </div>
            <div>
                <label>Album</label>
                <input type="text" value={album}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre}/>
            </div>
            <div>
                <label>Release Date</label>
                <input type="text" value={release_date}/>
            </div>
        </form>
     );
}
 
export default AddNewSongForm;

