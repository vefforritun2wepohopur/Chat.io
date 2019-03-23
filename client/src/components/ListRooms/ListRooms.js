import React from 'react';
import { socket } from '../../services/socketService';


class ListRooms extends React.Component {
    componentDidMount() {
        console.log(socket);
        socket.on('roomlist', roomList=> {
            this._getAllRooms(roomList);
        });
    }

  _getAllRooms(roomList){
    this.setState({
        roomlist: roomList.map((r, idx) => `Rooms ${idx + 1}`)
    });
  }
 
  constructor(props) {
    super(props);
    this.state = {
        roomlist: [],
        room: 'lobby'
    };
}


  
  render() {
    const { roomlist } = this.state;
    const { room } = this.state;
    return (
        <div className="container">
            <p>Listing all rooms</p>
            <ListRooms.listRooms roomlist={ roomlist } />
            <p>Currently logged in: {this.state.room}</p>
        </div>
    );
}
};



ListRooms.listRooms = props => (
    <div className="rooms">
        { props.roomlist.map(r => <div key={ r } className="rooms">{ r }</div>) }
       
    </div>
);
export default ListRooms;
