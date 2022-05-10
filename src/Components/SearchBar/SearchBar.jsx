import React, { useState } from "react";

const SearchBar = (props) => {
    
    const [term, setTerm] = useState(' ')

    function handleSubmit(event){
        event.preventDefault();
        console.log(term)
        props.searching(term)
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={term} onChange={(event) => setTerm(event.target.value)}/>
                <button type='submit'>Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;