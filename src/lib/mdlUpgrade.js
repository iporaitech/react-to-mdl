import React from 'react';
import { findDOMNode } from 'react-dom';
import { mdl } from "exports-loader?mdl=componentHandler!material-design-lite/material";

/**
 * Returns a component class that MDL upgrades when componentDidMount() and
 * MDL downgrades when componentWillUnmount()
 *
 * @param {class | function} Component - either a class extending React.Component
 *                                       or a function.
 */
const mdlUpgrade = (Component) => {
  if (Component.prototype instanceof React.Component) {
    return _upgradeClass(Component);
  } else {
    return _upgradeFunction(Component);
  }
}


//
// Private helper functions
//

const _upgradeFunction = (Component) => {
  return class extends React.Component {
    componentDidMount() {
      mdl.upgradeElements(findDOMNode(this));
    }
    componentWillUnmount() {
      mdl.downgradeElements(findDOMNode(this));
    }
    render() {
      return Component(
        Object.assign({}, Component.defaultProps, this.props)
      );
    }
  }
}

const _upgradeClass = (Component) => {
  return class extends Component {
    componentDidMount() {
      if(super.componentDidMount){
        super.componentDidMount();
      }
      mdl.upgradeElements(findDOMNode(this));
    }
    componentWillUnmount(){
      if(super.componentWillUnmount){
        super.componentWillUnmount();
      }
      mdl.downgradeElements(findDOMNode(this));
    }
  }
}

export { mdlUpgrade };
