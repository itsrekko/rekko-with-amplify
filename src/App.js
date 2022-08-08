import React, { useEffect } from 'react';
import {
  withAuthenticator,
  Button,
  View,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useGlobalState } from './context/GlobalState';
import Home from './pages/Home';
import './App.css';

function App({ signOut, user }) {
  const [, setUserState] = useGlobalState();
  
  useEffect(() => {
    setUserState({
      loggedUser: user
    })
  }, [setUserState, user]); // eslint-disable-next-line

  return (
    /*
    - app logic 
      - if the user is a new user then send them to the add new product page as soon as they login
      - if the user is an existing user then send them to the home page of the product

    */
    <View className="App">
        <Router>
            <Routes>
                <Route path = "/" element = {<Home />} />
            </Routes>
        </Router>
        <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
