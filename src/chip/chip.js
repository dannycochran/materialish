import React, { Component } from 'react';

class Chip extends Component {
  render() {
    const {
      children,
      className = '',
      active = false,
      outlined = false,
      onCloseClick,
      ...props
    } = this.props;

    const isClickable = !!props.onClick;

    return (
      <div
        className={`mt-chip ${isClickable ? 'mt-chip-clickable' : ''} ${
          active ? 'mt-chip-active' : ''
        } ${outlined ? 'mt-chip-outlined' : ''} ${
          onCloseClick ? 'mt-chip-closeable' : ''
        } ${className}`}
        {...props}>
        {children}
        {onCloseClick && (
          <span className="mt-chip_close" onClick={onCloseClick} />
        )}
      </div>
    );
  }
}

export default Chip;
