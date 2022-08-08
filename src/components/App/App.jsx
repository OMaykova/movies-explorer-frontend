import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        {/* <ProtectedRoute exact path='/'> */}
        <Route path ='/'>
          <Header handleSignIn={handleSignIn}/>
          <Main handlePromoButton={handlePromoButton}/>
          <Footer />
        </Route>
        {/* </ProtectedRoute> */}
        {/* <Route exact path='/signup'>
          <Register />
        </Route>
        <Route exact path='/signin'>
          <Login />
        </Route> */}
        <Route exact path='*'>
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;