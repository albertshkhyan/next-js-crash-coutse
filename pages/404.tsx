import Link from "next/link";

import styles from "../styles/error.module.scss"

export default function ErrorPage() {
  return (
    <>
      <h1 className={styles.error}>Error page</h1>
      <p>Please go back <Link href="/">Go back</Link> </p>
    </>
  )
}