import React from 'react';
//import SocketContext from '../../contexts/SocketContext';
import { socket } from '../../services/socketService';


/* CreateUser og constructor alveg eins og chatwindow */
  class CreateUser extends React.Component {
    componentDidMount() {
    console.log(socket);
  
  }

  constructor(props){
    super(props);
    this.state = {
      username: ' ',
      room: 'lobby'
    };
  }

  //Send the socket 
  sendUserName = () => {
    socket.emit('adduser', this.state.username, function(available){
      if (available){
         console.log("Name is free");
      }
      else{
        console.log("Name is not free");
      }
  });

  }


  
render() {	
      const { username, users } = this.state
      return (
          <div className="login">
          <input type="text" id="username" value={ username } onChange={e => this.setState({ username: e.target.value })} placeholder="Please choose your username: " />
          <button type="button" onClick={() => this.sendUserName(username)}>Send</button>
          <label for="username" class="control-label">Nick-name</label>

          </div>
         );
  }
};
export default CreateUser;
