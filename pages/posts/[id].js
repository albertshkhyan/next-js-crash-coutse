import { useState, useEffect } from "react";

import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";

import MainLayout from "./../../components/MainLayout";

/**
   <Head>
        <meta name="keywords" content="post, postId" />
        <meta name="description" content="This page show special post"></meta>
 
      </Head >
 */

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);//null | object

  const { query } = useRouter();

  useEffect(() => {
    //# if server give null and loading will be from client
    debugger
    const load = async () => {
      const res = await fetch(`http://localhost:4200/posts/${query.id}`);
      const post = await res.json();
      setPost(post);
    }
    if (!serverPost) {//if server not give response we do request from client
      load();
    }

  }, [])

  if (!post) {
    return (
      <MainLayout>
        <h2>Loading ...</h2>
      </MainLayout>
    )
  }

  console.log('post', post);
  // const router = useRouter()
  return (
    <MainLayout title="Post page">

      {/* <h2>
        Post with dynamic paramter {router.query.id}
      </h2> */}

      <h2>{post.title}</h2>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts">
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  )
}
/** By default  getInitialProps take paramter < context > */
// Post.getInitialProps = async (ctx) => {
//   console.log("ctx.query --------", ctx.query);// { id: '1' }

//   return {}//always must return something
// }

////# 1 varant -  COMBINE FTONTEND AND BACKEND
Post.getInitialProps = async ({ query, req }) => {

  if (!req) {//#if we is in client
    return { posts: null }
  }

  const res = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await res.json();
  console.log('post', post);

  return {
    post
  }
}

////# 2 variant - only backend

// export async function getServerSideProps({ query, req }) {

//   // if (!req) {//#if we is in client
//   //   return { posts: null }
//   // }
//   const res = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await res.json();
//   console.log('post', post);
//   return {
//     props: { post }, // will be passed to the page component as props
//   }
// }