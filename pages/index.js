
import Link from "next/link";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Next.js</h1>
      {/* <p><a href="/about">About</a></p>
      <p><a href="/posts">Posts</a></p> */}
      <p><Link href="/about">Aout</Link></p>
      <p><Link href="/posts">Posts</Link></p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quidem corporis consequuntur accusamus ipsum deserunt at. Qui nesciunt quis saepe. </p>
    </div>
  )
}
