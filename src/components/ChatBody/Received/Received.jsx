import React from 'react';
import PropTypes from 'prop-types';
import './Received.css';

const Received = ({ message }) => <div className="received msg">
    {message.msg}
</div>;

export default Received;

Received.propTypes = {
    message: PropTypes.object
}