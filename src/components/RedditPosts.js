import React, { useEffect, useState } from 'react';

const RedditPosts = () => {
    const API_URL = "https://www.reddit.com/r/Stoicism.json";

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data.data.children);
    }
    return (
        <div className="post">
            <h2>Recent Reddit Posts</h2>
            {posts.map((post) => (
                <a href={post.data.url} target="_blank" rel="noreferrer"><h3>{post.data.title}</h3></a>
            ))}
        </div>
    )
}

export default RedditPosts