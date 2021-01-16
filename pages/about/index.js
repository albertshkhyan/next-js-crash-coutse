import Router from 'next/router';

export default function About() {

  //Router is special object for navigate programmatically
  const handleGoBack = () => {
    Router.push('/');
  }
  return (
    <>
      <h1>About page</h1>

      <button onClick={handleGoBack}>Go back to home</button>
    </>
  )
}