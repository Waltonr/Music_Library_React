import React, { useState } from "react";

const SearchBar = (props) => {
    
    const [term, setTerm] = useState(' ')

    function HandleSubmit(event){
        event.preventDefault();
        let searchedTerm = {
            term: term, 
        };
        console.log(searchedTerm)
        
    }

    return ( 
        <form>
            <div>
                <input type="text" value={term} />
                <button>Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;