import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="cf8215d6-bd4a-44ba-ad52-001c22221460"
        userName="Waleedk2000"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App