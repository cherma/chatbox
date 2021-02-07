import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Received from './Received';
import Sent from './Sent';
import { connect } from 'react-redux';
import './ChatBody.css';

const ChatBody = ({ messages }) => {

    useEffect(() => {
        var objDiv = document.getElementsByClassName("chat-body")[0];
        if(objDiv) objDiv.scrollTop = objDiv?.scrollHeight;

    }, [messages.length])
    
    return(<div className="chat-body">
        {
            messages.map(message => {
                if(message.msgType === 'receive')
                    return  <Received key={message.id} message={message}/>
                return <Sent  key={message.id} message={message}/>
            })
        }
    </div>)
};

const mapStateToProps = (state) => {
    return {
        messages: state.messageReducer.message
    }
}

export default connect(mapStateToProps,null)(ChatBody);

ChatBody.propTypes = {
    messages: PropTypes.array
}

ChatBody.defaultProps = {
    messages: []
};
