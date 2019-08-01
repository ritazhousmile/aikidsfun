import React, { Component } from 'react';
import PlaydateTile from '../components/PlaydateTile'

class PlaydateIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playdates: []
    }
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
      </div>
    )
  }
}


export default PlaydateIndexContainer
