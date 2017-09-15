import React, { Component } from 'react';

class CharacterData extends Component {
  constructor(props){
    super(props);

    this.state = { show: false };

    this.openCloseData = this.openCloseData.bind(this);
  }

  openCloseData(){
    this.setState({ show: !this.state.show})
  }

  render() {
    const { speciesData } = this.props;

    if(!this.state.show) {
      return (
        <div>
          <h3>{speciesData.name}</h3>
          <button className='show-button' onClick={this.openCloseData}>Show Data</button>
        </div>
      );
    }

    return (
      <div className='planet-data-container'>
        <h3>{speciesData.name}</h3>
        <button className='show-button' onClick={this.openCloseData}>Hide Data</button>
        <ul>
          <p>Classification: {speciesData.classification}</p>
          <p>Designation: {speciesData.designation}</p>
          <p>Language: {speciesData.language}</p>
          <p>Average Height: {speciesData.average_height}cm</p>
          <p>Eye Colors: {speciesData.eye_colors}</p>
          <p>Hair Colors: {speciesData.hair_colors}</p>
          <p>Skin Colors: {speciesData.skin_colors}</p>
        </ul>
      </div>
    );
  }
}

export default CharacterData;
