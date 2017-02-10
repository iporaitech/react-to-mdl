import React from 'react';
import { findDOMNode } from 'react-dom';


/**
 * Returns a function that receives a functional or class Component so its DOM can be
 * upgraded by componentHandler.upgradeElements() when componentDidMount() and downgraded
 * when componentHandler.componentWillUnmount()
 *
 * @param { Object } componentHandler - componentHandler from material.js
 * @returns { function(class | function) } - receives either a class extending React.Component
 *                                           or a functional component.
 */
const mdlSetComponentHandler = (componentHandler) => {
  const mdlUpgrade = (Component) => {
    if (Component.prototype instanceof React.Component) {
      return _upgradeClass(Component, componentHandler);
    } else {
      return _upgradeFunction(Component, componentHandler);
    }
  }
  return mdlUpgrade;
}

//
// Private helper functions
//

const _upgradeFunction = (Component, componentHandler) => {
  return class extends React.Component {
    componentDidMount() {
      componentHandler.upgradeElements(findDOMNode(this));
    }
    componentWillUnmount() {
      componentHandler.downgradeElements(findDOMNode(this));
    }
    render() {
      return Component(
        Object.assign({}, Component.defaultProps, this.props)
      );
    }
  }
}

const _upgradeClass = (Component, componentHandler) => {
  return class extends Component {
    componentDidMount() {
      if(super.componentDidMount){
        super.componentDidMount();
      }
      componentHandler.upgradeElements(findDOMNode(this));
    }
    componentWillUnmount(){
      if(super.componentWillUnmount){
        super.componentWillUnmount();
      }
      componentHandler.downgradeElements(findDOMNode(this));
    }
  }
}

export { mdlSetComponentHandler };
