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
        roomlist: []
    };
}


  
  render() {
    const { roomlist } = this.state;
    return (
        <div className="container">
            <p>Listing all rooms</p>
           
        </div>
    );
}
};



ListRooms.listRooms = props => (
    <div className="rooms">
        { props.rooms.map(r => <div key={ r } className="rooms">{ r }</div>) }
    </div>
);
export default ListRooms;
