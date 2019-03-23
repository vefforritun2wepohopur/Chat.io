import React from 'react';
//import SocketContext from '../../contexts/SocketContext';
import CreateUser from '../../components/CreateUser/CreateUser';
//import ListRooms from '../../components/ListRooms/ListRooms';
import  ChatWindow from '../../components/ChatWindow/ChatWindow';
import { socket } from '../../services/socketService';
class Lobby extends React.Component {

    componentDidMount() {
        console.log(socket);
        socket.io.on('connection', () => {
            console.log("Connected");
        });

        socket.on('users', userList => {
            this.setState({users: userList.map((u, idx) => 'Username')})
        });        
    }

    constructor(props) {
        super(props);
        this.state = {
            username: ' ',
            users: [],
            topic:' ',
    
        };
    }
  

    render() {
        const {users, username} = this.state;
        console.log("duude");
        return (
            <div className="lobby-window">
                    <p>Lobby</p>
                    <p>Currently logged in as: {this.state.username}</p>
                    <ChatWindow users={ users }/>
            </div>
         
           
        );
    }

};


export default Lobby;