import React from 'react';
import SocketContext from '../../contexts/SocketContext';

class ChatWindow extends React.Component {
    componentDidMount() {
        const { socket } = this.context;
        socket.on('message', message => {
            const { messages } = this.state;
            this.setState({ messages: [ ...messages, message ] });
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            messages: [], /* List of all messages within the public lobby */
            message: '' /* Current message */
        };
    }
    sendMessage(message) {
        const { socket } = this.context;
        if (message === '') { return false; }
       
        var msg = data.trim(); //Deletes whitespace before and after message
        /* whisper skv. þessu myndbandi https://www.youtube.com/watch?v=k8o8-Q_-Qfk */ 
        if (msg.substr(0,3) === '/w '){
            msg = msg.substr(3);
            var ind = msg.indexOf(' ');
            if(ind !== -1) {
                var name = msg.substring(0, ind);
                var msg = msg.substring(ind + 1);
                if(name in users) {
                    users[name].emit('privatemsg', {msg: data, nick: socket.username}); //ekki viss hvort þetta virki hérna
                    console.log('Whisper!');
                }
                else {
                    console.log('Whisper Error! Enter a valid user')
                }
            }
            else {
            console.log('Whisper Error! Enter a message for the whisper');
            }
        }
        else {
        socket.emit('message', {msg: data, nick: socket.username}); //svo að nickname birtist með message
        //socket.emit('message', message);
        this.setState({ message: '' });
        }
    }

    render() {
        const { users } = this.props;
        const { messages, message } = this.state;
        return (
            <div className="chat-window">
                <ChatWindow.Title />
                <ChatWindow.Messages messages={ messages } />
                <ChatWindow.Users users={ users } />
                <div className="input-container">
                    <input type="text" value={ message } onChange={e => this.setState({ message: e.target.value })} placeholder="Enter your message here..." />
                    <button type="button" onClick={() => this.sendMessage(message)}>Send</button>
                </div>
            </div>
        );
    }
};

ChatWindow.Title = () => (
    <h3>
        <span className="first">C</span>
        <span className="second">h</span>
        <span className="third">a</span>
        <span className="fourth">t</span>
        <span className="fifth">.</span>
        <span className="sixth">i</span>
        <span className="seventh">o</span>
    </h3>
);

ChatWindow.Messages = props => (
    <div className="messages">
        { props.messages.map(m => <div key={ m } className="message">{ m }</div>) }
    </div>
);

ChatWindow.Users = props => (
    <div className="users">
        { props.users.map(u => <div key={ u } className="user">{ u }</div>) }
    </div>
);

ChatWindow.contextType = SocketContext;

export default ChatWindow;