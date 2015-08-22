'use strict';

var React = require('react');
var Pokemon = require('./Pokemon.jsx');
var request = require('superagent');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      pokemon: []
    }
  },

  componentDidMount: function() {
    for (var i = 1; i <= 151; i++) {
      request
        .get('http://pokeapi.co/api/v1/pokemon/' + i + '/')
        .end(function(err, res) {
          this.setState({
            pokemon: this.state.pokemon.concat([JSON.parse(res.text)])
          });
        }.bind(this));
    }
  },

  render: function() {
    var pokemonList = this.state.pokemon.map(function(pokemon) {
      return <Pokemon pokemon={pokemon} />
    });

    return (
      <main>
        {pokemonList}
      </main>
    );
  }
});
