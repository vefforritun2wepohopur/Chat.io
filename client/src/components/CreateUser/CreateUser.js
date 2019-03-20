import React from 'react';
import SocketContext from '../../contexts/SocketContext';

/* CreateUser og constructor alveg eins og chatwindow */
class CreateUser extends React.Component {
componentDidCatch() {
  const { socket } = this.context;
  socket.on('userName', userName => {
    const { userNames } = this.state;
    this.setState({ userNames: [ ...userNames, userName]});
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
  else {
    userNames.push(userName);
    componentDidCatch();
  }
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