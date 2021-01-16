import { useRouter } from 'next/router'
import Head from "next/head";

export default function Post() {

  const router = useRouter()
  console.log('router', router);
  return (
    <>
      <Head>
        <title>Post page | id of post</title>
        {/** Define keywords for search engines: */}
        <meta name="keywords" content="post, postId" />
        <meta name="description" content="This page show special post"></meta>

      </Head>
      <h2>
        Post with dynamic paramter {router.query.id}
      </h2>
    </>
  )
}