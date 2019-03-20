import React from 'react';
import SocketContext from '../../contexts/SocketContext';

/* CreateUser og constructor alveg eins og chatwindow */
class CreateUser extends React.Component {
componentDidCatch() {
  const { socket } = this.context;
<<<<<<< HEAD
  socket.on('adduser', username => {
    const { username } = this.state;
    this.setState({ username});
=======
  socket.on('userName', userName => {
    const { userNames } = this.state;
    this.setState({ userNames: [ ...userNames, userName]});
>>>>>>> 25519482e51d2da4aae0be9f964ffdfb94fd04ea
  });
}

constructor(props) {
  super(props);
  this.state ={
    userNames: [], /*All the usernames currently taken */
    userName: '' /* current username */
  }
}

render() {
  return (
    <div className="name-window">
      <div className="input-container">
        <input type="text" value={ username } onChange={e => this.setState({ username: e.target.value })} placeholder="Enter your username here..." />
        <button type="button" onClick={() => this.handleRegister(username)}>Ok!</button>
      </div>
    </div>
  )
}
/*tók callback sem parameter, óþarfi? */
handleRegister(userName) {
  if (!isUsernameAvailable(userName)) {
    return callback('user is not available');
  }
<<<<<<< HEAD
  else(componentDidCatch);
  this.setState({ username: e.target.value});
=======
  else {
    userNames.push(userName);
    componentDidCatch();
  }
>>>>>>> 25519482e51d2da4aae0be9f964ffdfb94fd04ea
}

}
    


/*IsUsernameAvailable function returns boolean */
isUsernameAvailable(userName){
  var length = usernames.length;
  for (var i = 0; i < length; i++) {
    if(userName == usernames[i]) {
      return false;
    }
    else {
      return true;
    }
  }
}

CreateUser.contextType = SocketContext;

export default CreateUser;