import Link from "next/link";
import { useState, useEffect } from "react";

import MainLayout from "./../components/MainLayout";


export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);//null | object

  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:4200/posts");
      const json = await res.json();
      setPosts(json);
    }
    if (!serverPosts) {//if server not give response we do request from client
      load();
    }
  }, [])



  if (!posts) {
    return (
      <MainLayout>
        <h2>Loading ...</h2>
      </MainLayout>
    )
  }

  return (
    <MainLayout title="All Post page">
      <h2>
        All Posts
      </h2>

      {/* <pre>
        {JSON.stringify(posts, null, 2)}
      </pre> */}

      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

//# add static method in Posts component
Posts.getInitialProps = async ({ req }) => {
  //# here we do some request 
  //# here we write server code

  if (!req) {
    //# if we not located in server

    return {
      posts: null
    }
  }

  const res = await fetch("http://localhost:4200/posts");
  const postsJson = await res.json();

  //# then return object
  return {
    posts: postsJson //# in component we can access on this key throght props
  }
}