import React, { Component } from 'react';
import PlaydateTile from '../components/PlaydateTile'
import PlaydateFormContainer from './PlaydateFormContainer'

class PlaydateIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playdates: [],
      errors: []
    }
    this.addNewplaydate = this.addNewplaydate.bind(this)
  }

  addNewplaydate(newPlaydateObject) {
    fetch('/api/v1/playdates', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({playdate: newPlaydateObject})
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 422) {
          return response.json().then(data => {
            this.setState({ errors: data.errors });
            throw new Error(data.errors.join(', '));
          });
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
           throw(error);
        }
      })
      .then(body => {
        this.setState({
          playdates: this.state.playdates.concat(body),
          errors: []
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    fetch('api/v1/playdates')
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
      this.setState({ playdates: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let playdateTiles = this.state.playdates.map(playdate => {
      return (
        <PlaydateTile
          key={playdate.id}
          id={playdate.id}
          name={playdate.name}
          time={playdate.time}
          location={playdate.location}
          description={playdate.description}
          host={playdate.host_full_name}
          hostProfilePhoto={playdate.host_profile_photo}
          hostId={playdate.host_id}
          />
      )
    })
    
    let errorMessages;
    if (this.state.errors.length > 0) {
      errorMessages = (
        <div className="callout alert">
          <h5>Please correct the following errors:</h5>
          <ul>
            {this.state.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      );
    }

    return(
      <div>
        <h1>Playdates</h1>
        {errorMessages}
        {playdateTiles}
        <PlaydateFormContainer addNewplaydate={this.addNewplaydate} />
      </div>
    )
  }
}

export default PlaydateIndexContainer
