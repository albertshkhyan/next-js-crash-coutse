
import Link from "next/link";
import Head from "next/head";

import MainLayout from "./../components/MainLayout";

export default function Home() {
  return (
    <MainLayout title="Home page">
      <div>
        <h1>Hello Next.js</h1>
        <p><Link href="/about">Aout</Link></p>
        <p><Link href="/posts">Posts</Link></p>
        <p>Lorem ipsum dolor sit</p>
      </div>
    </MainLayout>
  )
}
