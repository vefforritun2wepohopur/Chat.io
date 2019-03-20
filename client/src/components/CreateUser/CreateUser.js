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

render() {
  return (
    <div className="name-window">
      <div className="input-container">
        <input type="text" value={ userName } onChange={e => this.setState({ userName: e.target.value })} placeholder="Enter your username here..." />
        <button type="button" onClick={() => this.handleRegister(userName)}>Ok!</button>
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
}

}
    


/*IsUsernameAvailable function returns boolean */


CreateUser.contextType = SocketContext;

export default CreateUser;