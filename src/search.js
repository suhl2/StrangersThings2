
import React, {useState} from 'react';
import ListPostsFiltered from './listpostsfiltered';

const Search = (props) => {
    return(
        <>
        <input onChange = {event => props.setSearchTerm(event.target.value)} type="text" placeholder='Search'></input>
        <button onClick={event => ListPostsFiltered(event, props.posts, props.searchTerm, props.setNewPosts)}>Search</button>
        </>
    )
}

export default Search;