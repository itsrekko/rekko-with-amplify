import React, { useState } from "react";
import { Button, Card, Grid, Stack, TextField, Typography } from '@mui/material';
import { createUserModel } from "../graphql/mutations";
import { listUserModels } from "../graphql/queries";
import { API } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import '../assets/css/FormStyler.css'

function CreateUserProfile(props) {
  const loggedUser = props.user;
  const [username, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
        const apiData = await API.graphql({ query: listUserModels });
        return apiData.data.listUserModels.items;
    }
    catch(err){
        console.log(err);
    }
  }

  const createNewUser = async () => {
    try{
      const users = await getAllUsers();
      if (users.find(user => user.username === username && !user._deleted)){
        setErrorMessage('username is already taken, please try again');
        setError(true);
        return;
      }
      setError(false);
      setErrorMessage('');
      const userDetails = {
        id: loggedUser.username,
        username: username
      };
      await API.graphql({ query: createUserModel, variables: {input: userDetails}});
      navigate('/');
    }
    catch(err){
      console.log(err);
    }
  }
  const handleSubmit = (event) => {
    createNewUser();
  }

  return (
    <Stack>
      <Card className="user-form">
        <div className="custom-title">
          Create your profile
        </div>
        <Grid
          container
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <TextField
            error={error}
            id="username"
            placeholder="Create your username"
            value={username}
            onChange={handleUserNameChange}
            helperText={errorMessage}
            className="textfield"
            variant="outlined"
            style={{
                marginBottom: '10px',
                minHeight: '56px',
                maxHeight: '56px',
            }}
            InputLabelProps={{
              classes: {
                root: "css-label",
                focused: "css-focused",
              },
            }}
            InputProps={{
              inputProps: {
                style: { textAlign: "center" },
              },
              classes: {
                root: "css-outlined-input",
                focused: "css-focused",
                notchedOutline: "notched-outline"
              },
              inputMode: 'numeric',
            }}
          />
          <Button
            id="review-submit"
            variant="contained" 
            className="user-button"
            onClick={handleSubmit}
            style={{
              textTransform: 'none',
              minHeight: '54px',
              maxHeight: '54px',
              marginBottom: '15px'
            }}
          >
            <Typography style={{
                fontWeight: 550,
                lineHeight: '21.47px',
                fontSize: '17px',
                color: '#FFFFFF'
            }}>
                Join
            </Typography>
          </Button>
        </Grid>
      </Card>
    </Stack>
  );
}

export default CreateUserProfile;
