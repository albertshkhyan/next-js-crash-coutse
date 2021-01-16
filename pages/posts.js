import { useState, useEffect } from "react";

import MainLayout from "./../components/MainLayout";


export default function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:4200/posts");
      const json = await res.json();
      setPosts(json);
    }
    load()
  }, [])

  return (
    <MainLayout title="All Post page">
      <h2>
        All Posts
      </h2>

      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </MainLayout>
  )
}