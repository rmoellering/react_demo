import React, { Component } from 'react';


export default class TripList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: null,
      lastUserId: null,
      tripData: null,
    };

    this.loadTrips = this.loadTrips.bind(this);
  }

  loadTrips(props) {

    console.log('Loading trips for user_id', this.props.userId)
    fetch(`http://127.0.0.1:5010/api/get_trips/` + this.props.userId)
      .then(response => response.json())
      .then(data => {
            const options = [];
            let key = 0;

            for (const item of data) {
              options.push(<option key={key} value={item.id}>{item.start_time} - {item.end_time}</option>);
              key = key + 1;
            }

            this.setState({tripData: options, lastUserId: this.props.userId});
          }
      )
      .catch(e => e)
  };

  render() {
    if (this.props.userId !== this.state.lastUserId) {
      this.loadTrips(this.props.userId);
    }
    return(this.state.tripData);
  }
}