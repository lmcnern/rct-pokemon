'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section>
        <h2> {this.props.pokemon.name} </h2>
        <p><strong>PokedexID</strong>: {this.props.pokemon.national_id}</p>
        <p><strong>attack</strong>: {this.props.pokemon.attack}          <strong>special attack</strong>: {this.props.pokemon.sp_atk}</p>
        <p><strong>defense</strong>: {this.props.pokemon.defense}        <strong>speed</strong>: {this.props.pokemon.speed}</p>
    </section>
    )
  }
});
