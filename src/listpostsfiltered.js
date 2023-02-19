import React, {useEffect, useState} from "react";

const ListPostsFiltered = (event, posts, term, setNewPosts) => {
    event.preventDefault();
    console.log(term);
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(term.toLowerCase()));
    console.log(filteredPosts);
    setNewPosts(filteredPosts);
} 

export default ListPostsFiltered;