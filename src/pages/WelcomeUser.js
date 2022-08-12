import React from "react";
import PropTypes from 'prop-types';
import CreateUserProfile from "../components/CreateUserProfile";

const WelcomeUser = (props) => {
    const loggedUser = props.user;

    return(
        <CreateUserProfile user={loggedUser}/>
    );
}

WelcomeUser.propTypes = {
    existingUser: PropTypes.bool.isRequired,
};

WelcomeUser.defaultProps = {
    existingUser: false,
};

export default WelcomeUser;