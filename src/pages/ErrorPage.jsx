import React from 'react';
import NavBar from '../components/NavBar';

function ErrorPage() {
  return (
    <>
      <NavBar />
      {/* <-------------------- change starts here */}
      <h1>Oops! Looks like something went wrong.</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      {/* <-------------------- change ends here */}
    </>
  );
}

export default ErrorPage;
