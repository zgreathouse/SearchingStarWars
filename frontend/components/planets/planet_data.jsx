import React, { Component } from 'react';

class PlanetData extends Component {
  constructor(props){
    super(props);

    this.state = { show: false };

    this.openCloseData = this.openCloseData.bind(this);
  }

  openCloseData(){
    this.setState({ show: !this.state.show})
  }

  render() {
    const { planetData } = this.props;

    if(!this.state.show) {
      return (
        <div>
          <h3>{planetData.name}</h3>
          <button className='show-button' onClick={this.openCloseData}>Show Data</button>
        </div>
      );
    }

    return (
      <div className='planet-data-container'>
        <h3>{planetData.name}</h3>
        <button className='show-button' onClick={this.openCloseData}>Hide Data</button>
        <ul>
          <p>Population: {planetData.population}</p>
          <p>Climate: {planetData.climate}</p>
          <p>Terrain: {planetData.terrain}</p>
          <p>Surface Water: {planetData.surface_water}%</p>
          <p>Rotation Period: {planetData.rotation_period} hours</p>
          <p>Orbital Period: {planetData.orbital_period} days</p>
          <p>Diameter: {planetData.diameter}km</p>
        </ul>
      </div>
    );
  }
}

export default PlanetData;
