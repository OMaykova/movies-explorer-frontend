import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

function App() {

  function handleSignIn() {
    let x=0;
    return x+=1;
  }
  function handlePromoButton() {
    let x=0;
    return x+=1;
  }
  return (
    <div className="page">
      <Header handleSignIn={handleSignIn}/>
      <Main handlePromoButton={handlePromoButton}/>
      {/* <Movies />
      <SavedMovies />
      <Register />
      <Login />
      <Profile /> */}
      <Footer />
    </div>
  );
}

export default App;