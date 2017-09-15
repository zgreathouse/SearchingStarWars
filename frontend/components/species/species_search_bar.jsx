import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//components
import SpeciesData from './species_data';

class StarshipSearchBar extends React.Component {
  constructor(props) {
    super(props);

    //intitial state
    this.state = { search: '' };

    //bound methods
    this.handleInput = this.handleInput.bind(this);
    this.selectStarship = this.selectStarship.bind(this);
    this.matches = this.matches.bind(this);
  }

  handleInput(e) {
    this.setState({ search: e.currentTarget.value });
  }

  selectStarship(e) {
    let starship = e.currentTarget.innerText;
    this.setState({search: starship});
  }

  matches() {
    const { species } = this.props;
    const { search } = this.state;
    const matches = [];

    species.map( result => {
      let sub = result.name.slice(0, search.length);
      if(sub.toLowerCase() === search.toLowerCase()) {
        matches.push(result);
      }
    });

    return matches;
  }

  render() {
    const { search } = this.state;

    let results = this.matches().map((result, i) => {
      return (
        <li key={i}>
          <SpeciesData speciesData={result}/>
        </li>
      );
    });

    return(
      <div className='search-bar-container'>
        <div className='auto'>
          <input
            className='search-bar'
            onChange={this.handleInput}
            value={search}
            onSubmit={this.handleSubmit}
            placeholder="Enter A Species' Name"/>
          <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
};

export default StarshipSearchBar;
