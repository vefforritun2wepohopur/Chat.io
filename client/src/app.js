import React from 'react';
//import SocketContext from './contexts/SocketContext';
import { socket } from './services/socketService';
import ChatWindow from './components/ChatWindow/ChatWindow';
import Lobby from './components/Lobby/Lobby';

class App extends React.Component {
    componentDidMount() {
        
    }
  
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <Lobby/>
            </div>
        );
    }
};



export default App;