import React from 'react';
import { socket } from '../../services/socketService';
import ChatWindow from '../../components/ChatWindow/ChatWindow'

class JoinRoom extends React.Component {

  componentDidMount() {
    console.log(socket);
    socket.io.on('joinroom', () => {
        console.log("Connected to new room");
    });
    
}

  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      room:'roomName'
    };
  }

render() {
  const{username, room} =  this.state
  const { user } = this.props;
  
  return (
      <div className="Room-window">
              <p> RoomName </p>
              <ChatWindow/>

      </div>
   
     
  );
}

};

export default JoinRoom;