
import React, {useState} from 'react';

const Search = (props) => {
    return(
        <>
        <input onChange = {event => props.setSearchTerm(event.target.value)} type="text" placeholder='Search'></input>
        </>
    )
}

export default Search;