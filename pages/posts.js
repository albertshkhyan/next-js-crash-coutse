import Head from "next/head";
// import {Head} from "next/head";//error❌

import MainLayout from "./../components/MainLayout";


export default function Posts() {
  return (
    <MainLayout title="All Post page">
      {/* <Head>
        <title>Posts page | all posts</title>
      </Head> */}
      <h2>
        All Posts
      </h2>
    </MainLayout>
  )
}