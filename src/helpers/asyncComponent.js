import React from 'react';

const asyncComponent = (component) => {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        Component: null
      }
    }

    componentDidMount() {
      if (!this.state.Component) {
        component().then(cmp => this.setState({ Component: cmp.default }));
      }
    }

    render() {
      const { Component } = this.state;
      return (
        <div>
          {Component ? <Component {...this.props}/> : <div>Chargement</div>}
        </div>
      );
    }
  };
}

export default asyncComponent;