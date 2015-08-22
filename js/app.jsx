'use strict';

var React = require('react');
var Pokedex = require('./components/Pokedex.jsx');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>React Pokedex</h1>
        <Pokedex />
      </main>
    );
  }
});

React.render(<App />, document.getElementById('Pokedex'));
