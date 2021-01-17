import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = "next app" }) {
  return (
    <>

      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Link href="/">
          <span>
            Hoem
          </span>
        </Link>
        <Link href="/about">
          <span>
            About
          </span>
        </Link>
        {/* <Link href="/posts">Posts</Link> */}
        <Link href={{
          pathname: '/posts',
        }}>
          <span>
            Posts
          </span>
        </Link>
      </nav>
      <main>
        {children}
      </main>

      {/** local css styles with random names, also this variant auto add preffix.
       * 
       * We also  can use global styles
       * <style jsx global>
       */}
      <style jsx>{`

        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav span {
          color: #fff;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}
