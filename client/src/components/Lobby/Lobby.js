import React from 'react';
//import SocketContext from '../../contexts/SocketContext';
import CreateUser from '../../components/CreateUser/CreateUser';
import ListRooms from '../../components/ListRooms/ListRooms';
import { socket } from '../../services/socketService';
class Lobby extends React.Component {

    componentDidMount() {
        console.log(socket);
        socket.io.on('connection', () => {
            console.log("Connected");
        });
        
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            room:'Lobby'
        };
    }
    
	setUser = (user)=>{
		const { socket } = this.state
		socket.emit("connection", user);
		this.setState({user})
	}

    render() {
        const{username, room} =  this.state
        const { user } = this.props;
        
        return (
            <div className="lobby-window">
                    <p>Lobby</p>
                    <CreateUser socket={socket} setUser={this.user}/>
                    <ListRooms/>
            </div>
         
           
        );
    }

};


export default Lobby;