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
    const { characterData } = this.props;

    if(!this.state.show) {
      return (
        <div>
          <h3>{characterData.name}</h3>
          <button className='show-button' onClick={this.openCloseData}>Show Data</button>
        </div>
      );
    }

    return (
      <div className='planet-data-container'>
        <h3>{characterData.name}</h3>
        <button className='show-button' onClick={this.openCloseData}>Hide Data</button>
        <ul>
          <p>Birth Year: {characterData.birth_year}</p>
          <p>Gender: {characterData.gender}</p>
          <p>Height: {characterData.height}cm</p>
          <p>Mass: {characterData.mass}kg</p>
          <p>Eye Color: {characterData.eye_color}</p>
          <p>Hair Color: {characterData.hair_color}</p>
        </ul>
      </div>
    );
  }
}

export default CharacterData;
