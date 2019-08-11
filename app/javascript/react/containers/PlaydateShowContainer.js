import React, { Component } from 'react';
import PlaydateShow from "../components/PlaydateShow"
import PlaydateFormContainer from './PlaydateFormContainer'
import ChatContainer from './ChatContainer'

class PlaydateShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playdate: {},
      users: [],
      host: '',
      currentUser:'',
      editedPlaydate: false,
    }
    this.handcleEditeClick=this.handcleEditeClick.bind(this)
    this.updatePlaydateInfo = this.updatePlaydateInfo.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleAttendClick = this.handleAttendClick.bind(this)
  }

  componentDidMount() {
    let id = this.props.match.params.id
    fetch(`/api/v1/playdates/${id}`)
     .then(response => {
       if (response.ok) {
         return response;
       } else {
         let errorMessage = `${response.status} (${response.statusText})`,
             error = new Error(errorMessage);
         throw(error);
       }
     })
     .then(response => response.json())
     .then(body => {
       this.setState({playdate: body.playdate, host:body.host, users: body.users, currentUser: body.currentUser});
     })
     .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handcleEditeClick(event) {
    this.setState({editedPlaydate: true})
  }

  handleDeleteClick(event) {
    event.preventDefault()
    let id = this.state.playdate.id
    fetch (`/api/v1/playdates/${id}`, {
      credentials: 'same-origin',
      method:'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
      .then(response => response.json())
      .then(remainingPlaydates => {
        this.props.history.push('/playdates', {playdates: remainingPlaydates})
      })
  }

  handleAttendClick(event) {
    event.preventDefault()
    let id = this.state.playdate.id
    fetch(`/api/v1/playdates/${id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.currentUser)
    })
      .then(response => response.json())
      .then(body => {
          this.setState({ playdate:body.playdate,
            users: body.users
          })
      })
  }

  updatePlaydateInfo(newPlaydateInfo) {
    fetch(`/api/v1/playdates/${this.props.match.params.id}`, {
      method: 'PATCH',
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlaydateInfo)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
         throw(error);
      }
    })
      .then(response => response.json())
      .then(body => {
        this.setState({playdate: body})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let editPlaydate
    if (this.state.editedPlaydate) {
      editPlaydate =  <PlaydateFormContainer
          playdate={this.state.playdate}
          updatePlaydateInfo={this.updatePlaydateInfo}
         />
    }

    return(
      <div>
        <div className="row">
          <PlaydateShow
            key={this.state.playdate.id}
            name={this.state.playdate.name}
            time={this.state.playdate.time}
            location={this.state.playdate.location}
            description={this.state.playdate.description}
            hostFirstName={this.state.host.first_name}
            hostLastName={this.state.host.last_name}
            handleClick={this.handcleEditeClick}
            handleDelete={this.handleDeleteClick}
            hostId={this.state.playdate.host_id}
            handleAttendClick = {this.handleAttendClick}
            currentUser={this.state.currentUser}
            attendees={this.state.users}
          />

          <ChatContainer id={this.props.match.params.id} />
        </div>
        <div className="row">
          {editPlaydate}
        </div>
      </div>
    )
  }

}
export default PlaydateShowContainer;
