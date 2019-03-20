import React from 'react';
import SocketContext from '../../contexts/SocketContext';
import CreateUser from '../../components/CreateUser/CreateUser';
class Lobby extends React.Component {

    componentDidMount() {
        const { socket } = this.context;
        socket.io.on('connection', room => {
            const { lobby } = this.state;
        });
    }

    render() {
        const { users } = this.props;
        const { rooms } = this.props;
        return (
            <div className="lobby-window">
                    <p>Lobby</p>
                    <CreateUser/>
            </div>
        
           
           
        );
    }

};

Lobby.contextType = SocketContext;

export default Lobby;