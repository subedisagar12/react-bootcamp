import React, { useEffect, useState } from "react";
import axios from "axios";

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     axios({
  //       url: "https://jsonplaceholder.typicode.com/posts",
  //       method: "GET",
  //     })
  //       .then((res) => {
  //         // console.log(res.data);
  //         setPosts(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  function fetchData() {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {/* <h1>Post title 1</h1>
      <h1>Post title 2</h1>
      <h1>Post title 3</h1> */}

      <button onClick={fetchData}>Fetch Post</button>

      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </>
  );
};

export default PostPage;
