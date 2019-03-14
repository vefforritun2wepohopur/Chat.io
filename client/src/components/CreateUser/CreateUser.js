import React from 'react';
import SocketContext from '../../contexts/SocketContext';

/* CreateUser og constructor alveg eins og chatwindow */
class CreateUser extends React.Component {
componentDidCatch() {
  const { socket } = this.context;
  socket.on('username', username => {
    const { usernames } = this.state;
    this.setState({ usernames: [ ...usernames, username]});
  });
}

constructor(props) {
  super(props);
  this.state ={
    usernames: [], /*All the usernames currently taken */
    username: '' /* current username */
  }
}

handleRegister(userName, callback) {
  if (!isUsernameAvailable(userName)) {
    return callback('user is not available');
  }
}

}
    


/*IsUsernameAvailable function returns boolean */


CreateUser.contextType = SocketContext;

export default CreateUser;