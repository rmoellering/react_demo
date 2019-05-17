import React, { Component } from 'react';
import './App.css';
import UserList from './userList'
import TripList from './tripList'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: null,
    }
    this.userSelect = this.userSelect.bind(this);
  }

  userSelect(value) {
    console.log('APP', value)
    this.setState({userId: value})
  }

  tripSelect(value) {
    console.log('TRIP', value)
  }

  render() {
    return (
      <div className="App">
        <br/>
        User: <UserList onUserSelect={this.userSelect}/>
        Trip:
        <div>
          <select>
              <TripList userId={this.state.userId} onChange={this.tripSelect}/>
          </select>
        </div>
      </div>
    );
  }
}
