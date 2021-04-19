'use strict';

// Nodes Component (functional)
function Nodes({ app, initialState }) {
  this.state = initialState;

  // Create the DOM(this.target) to render Nodes Component into
  this.target = document.createElement('ul');
  app.appendChild(this.target);

  // receives nextState, update this.state with nextState, and render
  this.setState = (nextState) => {
    this.state = nextState;
    // because .render() renders based on this.state
    // this.render() will updates the browser automatically based on this.state
    this.render();
  }

  // render function (with no parameter)
  // this renders based on the current condition(this.state)
  this.render = () => {
    this.target.innerHTML = this.state.nodes.map(node => 
      `<li>${node.name}</li>`
    )
  }

  // this executes render() function right after the instantiation
  // instantiation: a way to create an obj using functions in JS
  // this allows rendering right after using the keyword new to create an obj
  this.render();
}