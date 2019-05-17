import React, { Component } from 'react';


export default class UserList extends Component {

  constructor(props) {
    super(props);

    // inputValue: null
    this.state = {
      inputValue: null,
      lastInputValue: null,
      userData: null,
    };

    this.loadUsers = this.loadUsers.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.loadUsers()
  }

  loadUsers() {
    console.log('Loading users...')
    fetch(`http://127.0.0.1:5010/api/get_users`)
      .then(response => response.json())
      .then(data => {
            const options = []
            let key = 0

            for (const item of data) {
              options.push(<option key={item.id} value={item.id}>{item.username} - {item.first_name} {item.last_name}</option>)
              key = key + 1
            }

            this.setState({userData: options})
          }
      )
      .catch(e => e)
  };

  onSelect(e) {
    console.log('value', e.target.value)
    this.props.onUserSelect(e.target.value)
  }

  render() {

    if (this.state.userData === null) {
      return(<div><select /></div>);
    } else {
      return (
        <div>
          <select onChange={this.onSelect}>
              {this.state.userData}
          </select>
        </div>
      );
    }
  }
}
