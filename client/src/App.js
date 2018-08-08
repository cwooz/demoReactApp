import React, { Component } from 'react';
// import {Button, Icon} from 'react-materialize'
import './App.css';

class App extends Component {
  state = { passwords: [] }

  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords, store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  // handleClick = () => {
  //   console.log('this is:', this);
  // }
  
  render() {
    const { passwords } = this.state;
    // const { classtwo } = {  };

    return (

      <div className="jumbotron">
        <div className="App">
          {/* Render the passwords */}
          {passwords.length ? (
            <div>
              <h1>5 Passwords.</h1>
              <ul className="passwords">
                {/* There will always be the same number of passwords, and they never change positions in the array */}
                {passwords.map((password, index) =>
                  <li key={index}>
                    {password}
                  </li>
                )}
              </ul>
              <button
                className="more"
                onClick={this.getPasswords}>
                Get More
              </button>
              <br/>
              <br/>

            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown 4 Links
              </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="https://github.com/cwooz/demoReactApp" target="_blank">View the Code</a>
                  <a className="dropdown-item" href="https://www.npmjs.com/package/password-generator" target="_blank">NPM/password-generator</a>
                </div>
              </div>



                {/* <a 
                  className="btn btn-primary"
                  role="button"
                  href="https://github.com/cwooz/demoReactApp"
                  target="_blank">
                  <i
                    className="material-icons link">
                  </i>
                    View the Code
                </a> */}

              {/* <a 
                href="https://github.com/cwooz/demoReactApp"
                onClick={handleClick}>
                View the Code
              </a> */}
            </div>
          ) : (
            // Render a helpful message otherwise
            <div>
              <h1>No passwords :(</h1>
              <button
                className="more"
                onClick={this.getPasswords}>
                Try Again?
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;