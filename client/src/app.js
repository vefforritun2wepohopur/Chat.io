import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import SocketContext from './contexts/SocketContext';
import { socket } from './services/socketService';
import CreateUser from './components/CreateUser/CreateUser';
import Lobby from './components/Lobby/Lobby';

class App extends React.Component {
    componentDidMount() {        
        socket.io.on('connection', () => {
            console.log("Connected");
        });    
    }
  
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            rooms: []
        };
    }
   
    render() {
        console.log(this.state.users);
        return (
            <Router>
            <div className="app-container">
                <Switch>
                    <Route exact path = '/' component = { CreateUser } />
                    <Route exact path = '/lobby' component = { Lobby } />
                </Switch>
            </div>
            </Router>
        );
    }
};



export default App;