import { useRouter } from 'next/router'
import Head from "next/head";

import MainLayout from "./../../components/MainLayout";

/**
   <Head>
        <meta name="keywords" content="post, postId" />
        <meta name="description" content="This page show special post"></meta>
 
      </Head >
 */

export default function Post() {

  const router = useRouter()
  console.log('router', router);
  return (
    <MainLayout title="Post page">

      <h2>
        Post with dynamic paramter {router.query.id}
      </h2>
    </MainLayout>
  )
}