import React from 'react';
import SocketContext from '../../contexts/SocketContext';

/* CreateUser og constructor alveg eins og chatwindow */
class CreateUser extends React.Component {
componentDidMatch() {
  const { socket } = this.context;
  socket.on('adduser', users => {
      console.log(users);
      this._populateUserList(users);
  });
}

_populateUserList(users){
  this.setState({
    users: users.map((u, idx) => `User ${idx + 1}`)
  });
}

constructor(props) {
  super(props);
  this.state ={
    users: [], /*All the usernames currently taken */
    userName: '' /* current username */
  }
}



render() {
  
  const { userName } = this.state;
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
  const { socket } = this.context;
  socket.emit('adduser', this.userName);
  this.setState({ userName: this.userName });
  
}



};

CreateUser.contextType = SocketContext;

export default CreateUser;