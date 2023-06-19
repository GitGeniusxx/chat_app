import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

 return (
  <ChatEngine
   height="100vh"
   projectID="d5fb338b-81d4-4924-8e9a-2c6595ce95c6"
   userName={localStorage.getItem('username')} 
   userSecret={localStorage.getItem('password')}
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
   />
 )
}

export default App;


