'use strict';

// function App is in between function Breadcrumb and Nodes
function App(app) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: []
  }

  const breadcrumb = new Breadcrumb({
    app,
    initialState: this.state.depth
  })

  const nodes = new Nodes({
    app,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes
    },

    // When clicking events happen in Nodes, call onClick function
    // In this way, Nodes don't have to know what logic the onClick func has
    onClick: (node) => {
      if (node.type === 'DIRECTORY') {
        // deal with Breadcrumb here
      } else if (node.type === 'FILE') {
      }
    }
  }) 
}