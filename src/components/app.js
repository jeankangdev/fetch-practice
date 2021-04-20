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

  const nodes = new Nodes({
    app,
    initialState: [],
    
    onClick: async (node) => {
      try {
        if (node.type === 'DIRECTORY') {
          const nextNodes = await request(node.id)
          this.setState({
            ...this.state,
            depth: [...this.state.depth, node],
            nodes: nextNodes
          })
        } else if (node.type === 'FILE') {
          // open image
        } catch(error) {
          // deal with the error
        }
      }
    }
  })

    // When clicking events happen in Nodes, call onClick function
    // In this way, Nodes don't have to know what logic the onClick func has
    onClick: (node) => {
      if (node.type === 'DIRECTORY') {
        // deal with Breadcrumb here
      } else if (node.type === 'FILE') {
      }
    }

    this.setState = (nextState) => {
      this.state = nextState
      breadcrumb.setState(this.state.depth)
      nodes.setState({
        isRoot: this.state.isRoot,
        nodes: this.state.nodes
      })
    }

    const init = async = () => {
      try {
        const rootNodes = await request()
        this.setState({
          ...this.state,
          isRoot: true,
          nodes: rootNodes
        })
      } catch(error) {
        // deal with errors
      }
    }
    init()
  }) 
}