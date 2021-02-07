import { SEND_MESSAGE, RECEIVE_MESSAGE } from "../constants/type";

const initialState = {
    message: [{
        msg: 'Hello!! Ask me something',
        time: new Date(),
        id: `receive-${new Date().getTime()}`,
        msgType: 'receive'
    }]
};

const messageReducer = (state = initialState, action)=>{

    switch (action.type) {
        case SEND_MESSAGE: {
            const oldMessage = [...state.message];
            const message = {
                msg: action.msg,
                time: new Date(),
                id: `send-${new Date().getTime()}`,
                msgType: 'send'
            }
            oldMessage.push(message);

            return { ...state, message: [...oldMessage]}
        }

        case RECEIVE_MESSAGE: {
            const oldMessage = [...state.message];
            const message = {
                msg: action.msg,
                time: new Date(),
                id: `receive-${new Date().getTime()}`,
                msgType: 'receive'
            }
            oldMessage.push(message);

            return { ...state, message: [...oldMessage]}
        }
                
        default:
            return { ...state};
    }
};

export default messageReducer;
