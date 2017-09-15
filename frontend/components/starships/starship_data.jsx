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
    const { starshipData } = this.props;

    if(!this.state.show) {
      return (
        <div>
          <h3>{starshipData.name}</h3>
          <button className='show-button' onClick={this.openCloseData}>Show Data</button>
        </div>
      );
    }

    return (
      <div className='planet-data-container'>
        <h3>{starshipData.name}</h3>
        <button className='show-button' onClick={this.openCloseData}>Hide Data</button>
        <ul>
          <p>Model: {starshipData.model}</p>
          <p>Starship CLass: {starshipData.starship_class}</p>
          <p>Manufacturer: {starshipData.manufacturer}</p>
          <p>Cost: {starshipData.cost_in_credits} credits</p>
          <p>Length: {starshipData.length}m</p>
          <p>Passengers: {starshipData.passengers}</p>
          <p>Hyperdrive Rating: {starshipData.hyper_drive_rating} days</p>
          <p>Hair Color: {starshipData.hair_color}km</p>
        </ul>
      </div>
    );
  }
}

export default CharacterData;
