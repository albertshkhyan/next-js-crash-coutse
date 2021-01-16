import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  /**This is wrapper for all pages
     * here come current component, in whcih url corresponding
     * When change route this component renderd
   */
  return <Component {...pageProps} />
}

export default MyApp
