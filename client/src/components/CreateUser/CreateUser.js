import React from 'react';
//import SocketContext from '../../contexts/SocketContext';
import { socket } from '../../services/socketService';
import ListRooms from '../../components/ListRooms/ListRooms';

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
      //const { username, users } = this.state
      const { username } = this.props;
      return (
          <div className="login">
          <p>Create username</p>
          <input type="text" id="username" value={ username } onChange={e => this.setState({ username: e.target.value })} placeholder="Please choose your username: " />
          <button type="button" onClick={() => this.sendUserName(username)}>Send</button>
          <br/>
          <p>Currently logged in as: {this.state.username}</p>
          
          </div>
         
         );
  }
};


CreateUser.currentUser = props => (
  
  <div className="currentUser"> 
   <p>{props.username}</p>
  </div>
);

export default CreateUser;
