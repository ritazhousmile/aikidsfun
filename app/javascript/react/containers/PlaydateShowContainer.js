import React, { Component } from 'react';
import PlaydateShow from "../components/PlaydateShow"

class PlaydateShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playdate: {}
    }
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

  render() {
    return(
      <PlaydateShow
        key={this.state.playdate.id}
        name={this.state.playdate.name}
        time={this.state.playdate.time}
        location={this.state.playdate.location}
        description={this.state.playdate.description}
      />
    )
  }

}
export default PlaydateShowContainer;
