import React, { useEffect } from 'react';
import {
  withAuthenticator,
  View,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useGlobalState } from './context/GlobalState';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from './pages/Home';
import './App.css';
import WelcomeUser from './pages/WelcomeUser';

function App({ signOut, user }) {
  const [, setUserState] = useGlobalState();
  
  useEffect(() => {
    setUserState({
      loggedUser: user,
      username: undefined
    })
  }, [setUserState, user]); // eslint-disable-next-line

  return (
    /*
    - app logic 
      - if the user is a new user then send them to the add new product page as soon as they login
      - if the user is an existing user then send them to the home page of the product

    */
    <View className="App">
      <ResponsiveAppBar signOut={signOut} user={user}/>
      <Router>
          <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/welcome" element = {<WelcomeUser user={user}/>} />
          </Routes>
      </Router>
    </View>
  );
}

export default withAuthenticator(App, true);
