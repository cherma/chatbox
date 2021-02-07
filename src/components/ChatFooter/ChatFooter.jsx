import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ChatFooter.css';
import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../../constants/type';
import { findApi } from '../../api';

const ChatFooter = ({ sendMessage, receiveMessage }) => {

    const greetingMsg = ['hi', 'hello'];
    const myGreetings = ['Welcome to Wiki. Ask me anything', 'Hi, ask me anything', 'Hello, try asking me something', 'You could find the meaning you are searching for'];
    const endMessage = ['bye', 'see ya', 'exit'];
    const myEndMsg = ['Always ready to help', 'Thank you for using me', 'Hope I helped, see ya', 'Am always in to help you'];


    const [ btnState, disaableButton ] = useState(false);

    const textInput = useRef(null);

    const keyPressHandler = async (event) => {
        if(event.key === 'Enter' && event.target.value) {
            const data = event.target.value.trim();
            sendMessage(data);
            if(greetingMsg.includes(data.toLocaleLowerCase())) {
                receiveMessage(myGreetings[Math.floor(Math.random() * myGreetings.length)])
            } else if(endMessage.includes(data.toLocaleLowerCase())) {
                receiveMessage(myEndMsg[Math.floor(Math.random() * myEndMsg.length)])
                setTimeout(() => receiveMessage('Refresh the page to start again'), 1000);
                disaableButton(true);
            } else {
                disaableButton(true);
                let meaning = '';
                const findMeaning = await findApi(data).then(res => res);
                if(Array.isArray(findMeaning)) {
                    try {
                        meaning = findMeaning[0].meanings[0].definitions[0].definition;
                    } catch {
                        meaning = 'Sorry I couldnt get it for ya';
                    }
                } else {
                    meaning = findMeaning.message;
                }
                receiveMessage(meaning)
                disaableButton(false);
            }
            textInput.current.value = '';
            textInput.current.focus();
        }
    };

    return(<div className="chat-footer">
        <input className="chat-footer--input" disabled={btnState}
            ref={textInput} placeholder='Type your message'
            onKeyPress={keyPressHandler}></input>
    </div>)
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage:(msg)=> dispatch({ type: SEND_MESSAGE, msg }),
        receiveMessage: (msg) => dispatch({ type: RECEIVE_MESSAGE, msg }),
    }
}

export default connect(null,mapDispatchToProps)(ChatFooter);


ChatFooter.propTypes = {
    sendData: PropTypes.func
};