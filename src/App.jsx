import './App.css';
import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';

const App = () => {
  return (
    <div className="chatbox">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}

export default App;
