import React, {Component} from 'react';
import Textfield from '../components/Textfield'

class PlaydateFormContainer extends Component {
  constructor(props) {
    super(props)
    if ('playdate' in this.props) {
      this.state = this.props.playdate
    } else {
      this.state = {
        name: '',
        time: '',
        location: '',
        description: ''
      }
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormUpdate = this.handleFormUpdate.bind(this)
  }

    handleFormSubmit(event) {
      event.preventDefault();
      let newPlaydateObject = {
        name: this.state.name,
        time: this.state.time,
        location: this.state.location,
        description: this.state.description
      }
      this.props.addNewplaydate(newPlaydateObject)
      this.handleClearForm()
    }
    handleFormUpdate(event) {
      event.preventDefault();
      let newPlaydateInfo = {
        name: this.state.name,
        time: this.state.time,
        location: this.state.location,
        description: this.state.description
      }
      this.props.updatePlaydateInfo(newPlaydateInfo)
      this.handleClearForm()
    }

    handleNameChange(event) {
      let input = event.target.value
      this.setState({name: input})
    }

    handleTimeChange(event) {
      let input = event.target.value
      this.setState({time: input})
    }

    handleLocationChange(event) {
      let input = event.target.value
      this.setState({location: input})
    }

    handleDescriptionChange(event) {
      let input = event.target.value
      this.setState({description: input})
    }

    handleClearForm() {
      this.setState({
        name: '',
        time: '',
        location: '',
        description: ''
      })
    }

  render() {
    let handleClick
    if ('playdate' in this.props) {
      handleClick = this.handleFormUpdate
    } else {
      handleClick = this.handleFormSubmit
    }

    return (
      <div className="playdate-show-box columns small-12 medium-12 large-12">
        <h3>Add New Playdate</h3>
        <form className="new-playdate-form callout" onSubmit={handleClick}>
          <Textfield
            content={this.state.name}
            label="Playdate Name"
            name='name'
            inputChange={this.handleNameChange}
          />

          <Textfield
            content={this.state.time}
            label="Playdate Time"
            name='time'
            inputChange={this.handleTimeChange}
          />

          <Textfield
            content={this.state.location}
            label="Playdate location"
            name='location'
            inputChange={this.handleLocationChange}
          />

          <Textfield
            content={this.state.description}
            label="Playdate Description"
            name='description'
            inputChange={this.handleDescriptionChange}
          />

          <div className="button-group">
            <button className="button">Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default PlaydateFormContainer
