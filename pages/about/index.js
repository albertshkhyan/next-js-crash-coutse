import Router from 'next/router';

import MainLayout from "./../../components/MainLayout";

export default function About() {

  //Router is special object for navigate programmatically
  const handleGoBack = () => {
    Router.push('/');
  }
  return (
    <MainLayout title="About page">
      <h1>About page</h1>

      <button onClick={handleGoBack}>Go back to home</button>
    </MainLayout>
  )
}