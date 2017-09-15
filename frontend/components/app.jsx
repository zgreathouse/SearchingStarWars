import React, { Component } from 'react';
import axios from 'axios';

//components
import CharacterSearchBar from './characters/character_search_bar';
import PlanetSearchBar from './planets/planet_search_bar';
import SpeciesSearchBar from './species/species_search_bar';
import StarshipSearchBar from './starships/starship_search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    //intitial state
    this.state = {
      people: [],
      planets: [],
      species: [],
      starships: [],
    };

    //bound methods
    this.getPeople = this.getPeople.bind(this);
    this.getPlanets = this.getPlanets.bind(this);
    this.getSpecies = this.getSpecies.bind(this);
    this.getStarships = this.getStarships.bind(this);
  }

  //axios requests to Star Wars API
  getPeople() {
    return axios.get("http://swapi.co/api/people").then((response) => {
      this.setState({ people: response.data.results });
    });
  }

  getPlanets() {
    return axios.get("http://swapi.co/api/planets").then((response) => {
      this.setState({ planets: response.data.results });
    });
  }

  getSpecies() {
    return axios.get("http://swapi.co/api/species").then((response) => {
      this.setState({ species: response.data.results });
    });
  }

  getStarships() {
    return axios.get("http://swapi.co/api/starships").then((response) => {
      this.setState({ starships: response.data.results });
    });
  }


  componentDidMount() {
    this.getPeople();
    this.getPlanets();
    this.getSpecies();
    this.getStarships();
  }

  render() {
    const { people } = this.state;
    const { planets } = this.state;
    const { species } = this.state;
    const { starships } = this.state;

    return (
      <div className='app'>
        <CharacterSearchBar people={people}/>
        <PlanetSearchBar planets={planets}/>
        <SpeciesSearchBar species={species}/>
        <StarshipSearchBar starships={starships}/>
      </div>
    );
  }
}

export default App;
