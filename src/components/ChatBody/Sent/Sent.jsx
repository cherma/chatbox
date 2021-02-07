import React from 'react';
import PropTypes from 'prop-types';
import './Sent.css';

const Sent = ({ message }) => <div className="sent msg">
    {message.msg}
</div>;

export default Sent;

Sent.propTypes = {
    message: PropTypes.object
}