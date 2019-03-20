import React from 'react';
import SocketContext from '../../contexts/SocketContext';

/* CreateUser og constructor alveg eins og chatwindow */
class CreateUser extends React.Component {
componentDidCatch() {
  const { socket } = this.context;
  socket.on('adduser', username => {
    const { username } = this.state;
    this.setState({ username});
  });
}

constructor(props) {
  super(props);
  this.state ={
    usernames: [], /*All the usernames currently taken */
    username: '' /* current username */
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
  else(componentDidCatch);
  this.setState({ username: e.target.value});
}

}
    


/*IsUsernameAvailable function returns boolean */


CreateUser.contextType = SocketContext;

export default CreateUser;