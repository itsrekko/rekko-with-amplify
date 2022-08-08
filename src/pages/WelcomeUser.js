import React from "react";
import PropTypes from 'prop-types';

const WelcomeUser = (props) => {

    return(
        <h1>
            Welcome Page        
        </h1>
    );
}

WelcomeUser.propTypes = {
    existingUser: PropTypes.bool.isRequired,
};

WelcomeUser.defaultProps = {
    existingUser: false,
};

export default WelcomeUser;