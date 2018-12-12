import React, { Component } from 'react';

export class Header extends Component {

  render() {
    return (
      <header>
        <div style={{fontSize: '32pt'}}>{this.props.info.name}</div>
        <div>
          <span>{this.props.info.email}</span>
          <span> • </span>
          <span>{this.props.info.phone}</span>
        </div>
      </header>
    );
  }

}
