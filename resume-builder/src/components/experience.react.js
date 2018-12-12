import React, { Component } from 'react';

export class Experience extends Component {

  render() {
    return (
      <div>
        {this.props.entries.map(entry => {
          return (
            <div style={{margin: "10px 0"}}>
              <div>
                <span style={{fontWeight: 'bold'}}>
                  {entry.name}
                </span>
                <span style={{
                    fontStyle: 'italic',
                    float: 'right',
                  }}>
                  {entry.title}
                </span>
              </div>
              <div>{entry.start_date} to {entry.end_date}</div>
              <div>{entry.description}</div>
              <ul>
                {entry.accomplishments.map(accomplishment => {
                  return (
                    <li>{accomplishment.description}</li>
                  )
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

}
