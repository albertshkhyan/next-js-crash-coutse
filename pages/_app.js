import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />

      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </>
  )
}

export default MyApp
