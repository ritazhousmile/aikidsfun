import React, { Component } from 'react';
import PlaydateShow from "../components/PlaydateShow"
import PlaydateFormContainer from './PlaydateFormContainer'

class PlaydateShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playdate: {},
      editedPlaydate: false
    }
    this.handcleEditeClick=this.handcleEditeClick.bind(this)
    this.updatePlaydateInfo = this.updatePlaydateInfo.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
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
       this.setState({playdate: body});
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

  // handleDeleteLocation(event) {
  //   event.preventDefault()
  //   let locationId = this.state.chosenLocation.id
  //   fetch(`/api/v1/locations/${locationId}`, {
  //     credentials: 'same-origin',
  //     method: 'DELETE',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(remainingLocations => {
  //     this.props.history.push(`/locations`, { locations: remainingLocations } )
  //   })
  // }






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
      <PlaydateShow
        key={this.state.playdate.id}
        name={this.state.playdate.name}
        time={this.state.playdate.time}
        location={this.state.playdate.location}
        description={this.state.playdate.description}
        host={this.state.playdate.host_full_name}
        handleClick={this.handcleEditeClick}
        handleDelete={this.handleDeleteClick}
      />
      {editPlaydate}
      </div>
    )
  }

}
export default PlaydateShowContainer;
