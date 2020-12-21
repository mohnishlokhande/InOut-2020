import React from 'react'
import { Component } from 'react';
import Header from '../Header/Header';
import './booking.css'
import Paymentbtn from './paymentbtn';
export default class BookNow extends Component{
//     render(){
//         return(
           
//         )
//     }
// }

constructor() {
    super();
      this.state = {
      seat: [
        'lot1(21:00-22:00)','lot2(22:00-23:00)','lot3(23:00-00:00)',
        'lot4(00:00 -01:00)','lot5(01:00-02:00)','lot6(02:00-03:00)',
        'lot7(03:00-04:00)','lot8(04:00-05:00)','lot9(05:00-06:00)',
        'lot10(06:00-07:00)','lot11(07:00-08:00)','lot12(08:00-09:00)'//ss the parking slot from database.
      ],
      seatAvailable: [
        'lot1(21:00-22:00)','lot2(22:00-23:00)','lot3(23:00-00:00)',
        'lot4(00:00 -01:00)','lot5(01:00-02:00)','lot6(02:00-03:00)',
        'lot7(03:00-04:00)','lot8(04:00-05:00)','lot9(05:00-06:00)',
        'lot10(06:00-07:00)','lot11(07:00-08:00)','lot12(08:00-09:00)'// pass the parking slot from database.
      ],
      seatReserved: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:9001/api/booking_req', {
             method: 'POST',
           }).then(response=>response.json())
        //    .then(response => console.log(response))
        .then(err => {
          console.log(err);
          
          })
         
  }
  
  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
      })
    }
  }
  
  render() {
    return (
        <div className="bookdiv">  
        <Header />
      <div>
        <h1>Slot Booking Here </h1>
        <DrawGrid 
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          onClickData = { this.onClickData.bind(this) }
          />
      </div>
        <Paymentbtn />

      </div>
    )
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
       <div className="seatsbox">
        <h2></h2>
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
              </tr>
          </tbody>
        </table>
        
        <AvailableList available = { this.props.available } />
        <Bookedlot reserved = { this.props.reserved } />
        <br />

       </div>
    )
  }
  
  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return(
      <div className="left">
        <h4>Available Lot: ({seatCount == 0? 'No seats available' : seatCount})</h4>
        <ul>
          {this.props.available.map( res => <li key={res} >{res}</li> )}
        </ul>
      </div>
    )
  }
}

class Bookedlot extends React.Component {
  render() {
    return(
      <div className="right">
        <h4>Booked Lot: ({this.props.reserved.length})</h4>
        <ul>
          { this.props.reserved.map(res => <li key={res} >{res}</li>) }
        </ul>
      </div>
    )
  }
}

