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

  registerUser(param){
    const{username, room} =  this.state;
		socket.emit('adduser', username, this.checkUsername);
	
  }

  setUsername = ({username, isRegistered})=>{
	
    if(isRegistered)
    {
      console.log("Username is taken");
    }
    else
    {
      this.props.setUsername(username);
    }
  }
  
render() {	
      const { username, users } = this.state
      return (
          <div className="login">
         <input type="text" value={ username } onChange={e => this.setState({ username: e.target.value })} placeholder="Enter your message here..." />
          <button type="button" onClick={() => this.registerUser(username)}>Send</button>
          </div>
         );
  }
};
export default CreateUser;
