
import Link from "next/link";

import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <title>Next Index Hello</title>
      </Head>

      <div>
        <h1>Hello Next.js</h1>
        <p><Link href="/about">Aout</Link></p>
        <p><Link href="/posts">Posts</Link></p>
        <p>Lorem ipsum dolor sit</p>
      </div>
    </>
  )
}
