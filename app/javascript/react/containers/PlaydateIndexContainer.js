import React, { Component } from 'react';
import PlaydateTile from '../components/PlaydateTile'
import PlaydateFormContainer from './PlaydateFormContainer'

class PlaydateIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playdates: []
    }
    this.addNewplaydate = this.addNewplaydate.bind(this)
  }

  addNewplaydate(newPlaydateObject) {
    fetch('/api/v1/playdates', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlaydateObject)
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
          this.setState({playdates: this.state.playdates.concat(body)})

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
          />
      )
    })

    return(
      <div>
      <h1>Playdates</h1>
        {playdateTiles}
        <PlaydateFormContainer addNewplaydate={this.addNewplaydate} />
      </div>
    )
  }
}


export default PlaydateIndexContainer
