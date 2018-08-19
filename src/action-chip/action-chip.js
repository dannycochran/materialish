import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../ripple/ripple';

class ActionChip extends Component {
  render() {
    const {
      className = '',
      ripple = true,
      children,
      icon,
      nodeRef,
      ...props
    } = this.props;

    return (
      <button
        ref={nodeRef}
        className={`mt-chip ${
          props.onClick ? '' : 'mt-chip-notClickable'
        } ${className}`}
        {...props}
        onClick={this.onClick}>
        {icon &&
          React.cloneElement(icon, {
            className: `mt-chip_icon ${icon.props.className}`,
          })}
        <div className="mt-chip_chip">{children}</div>
        {ripple && props.onClick && <Ripple ref={this.getRippleRef} />}
      </button>
    );
  }

  getRippleRef = component => {
    this.rippleComponent = component;
  };

  onClick = e => {
    const { onClick } = this.props;

    if (this.rippleComponent) {
      this.rippleComponent.onClick(e);
    }

    if (onClick) {
      onClick(e);
    }
  };
}

ActionChip.propTypes = {
  className: PropTypes.string,
  ripple: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ActionChip;
