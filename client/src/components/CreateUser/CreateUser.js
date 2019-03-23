import React from 'react';
//import SocketContext from '../../contexts/SocketContext';
import { socket } from '../../services/socketService';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/* CreateUser og constructor alveg eins og chatwindow */
  class CreateUser extends React.Component {
    componentDidMount() {
    console.log(socket);
  
  }

  constructor(props){
    super(props);
    this.state = {
      username: ' ',
      room: 'lobby',
      redirect: false
    };
  }

  //Send the socket 
  sendUserName = (username, room) => {
    socket.emit('adduser', this.state.username, function(available){
      if (available){
         console.log("Name is free");
         console.log("logged in as:" + username);
         socket.emit('joinroom', {room: 'lobby'}, function(available){
         console.log('logged into: ' + room);
         socket.emit('users');
      
        // props.usernames.push(this.state.username,);
         
        });

    
      }
      else{
         console.log("Name is not free");
      }
      
  });

     socket.on('users', userList => {
            this.setState({users: userList.map((u, idx) => 'Username')})
        });   

  }

  sendToLobby = () =>{
  
    if(this.state.redirect === true){
      this.state.redirect = true;
      console.log("Redirecting to lobby");
      //return <Redirect to= '/lobby'/>;
    }
    else
    {
      console.log("Login failed");
    }
  }

  
render() {	
    const { username, room, redirect} = this.state;
   
    if(this.state.redirect === true)
    {
      return <Redirect to= '/lobby'/>;
    }
   
      
      return (
          <div className="login">
          <p>Create username</p>
          <input type="text" id="username" value={ username } onChange={e => this.setState({ username: e.target.value })} placeholder="Please choose your username: " />
          <button type="button" onClick={ () => { this.sendUserName(username, room); this.setState({ redirect: true }); this.sendToLobby();}}>Send</button>
          <br/>
          <p>Currently logged in as: {this.state.username}</p>
          </div>
         
         );
  }
};


const mapStateToProps = ( { username } ) => {

  return {
    username
  };
};



export default connect(mapStateToProps)(CreateUser);
