import React from 'react';
import SocketContext from './contexts/SocketContext';
import ChatWindow from './components/ChatWindow/ChatWindow';
import Lobby from './components/Lobby/Lobby';

class App extends React.Component {
    componentDidMount() {
        const { socket } = this.context;
        socket.on('users', userList => {
            this._populateUserList(userList);
        });
    }
    _populateUserList(userList) {
        this.setState({
            users: userList.map((u, idx) => `User ${idx + 1}`)
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <Lobby/>
            </div>
        );
    }
};

App.contextType = SocketContext;

export default App;