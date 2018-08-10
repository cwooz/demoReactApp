import React, { Component } from 'react';
// import {Button, Icon} from 'react-materialize'
import './App.css';

class App extends Component {
  state = { passwords: [] };

  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords, store them in state.
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  };

  // handleClick = () => {
  //   console.log('this is:', this);
  // }

  render() {
    const { passwords } = this.state;
    // const { classtwo } = {  };

    return (
      <div className="jumbotron center-60">
        <div className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Demo
          </a>
          <div className="dropdown float-right">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown Links
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a
                className="dropdown-item"
                href="https://github.com/cwooz/demoReactApp"
                target="_blank"
              >
                View the Code
              </a>
              <a
                className="dropdown-item"
                href="https://www.npmjs.com/package/password-generator"
                target="_blank"
              >
                NPM/password-generator
              </a>
            </div>
          </div>
        </div>

        <div className="App">
          {/* Render the passwords */}
          {passwords.length ? (
            <div className="top">
              <h1>5 Passwords</h1>
              <ul className="passwords">
                {/* There will always be the same number of passwords, and they never change positions in the array */}
                {passwords.map((password, index) => (
                  <li key={index}>{password}</li>
                ))}
              </ul>
              <button className="more" onClick={this.getPasswords}>
                New
              </button>
              <br />
              <br />

              <div Name="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Information About the App
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      This React App Demo is a password generator. Each time you
                      load the app or click New you’ll get 5 random passwords.
                      An interesting idea made possible by the NPM dependency{' '}
                      <a
                        href="https://www.npmjs.com/package/password-generator"
                        target="_blank"
                      >
                        password-generator
                      </a>{' '}
                      .The app was built using create-react-app and added
                      Bootstrap after as a dependency. The App.css sheet shows
                      custom styling, Bootstrap added for Dropdown Menu &amp;
                      Navbar. Git created locally and pushed to Github for
                      Backup and Heroku for Hosting. If you have any questions
                      about the App, please contact me. Thanks for your time!
                      <a
                        href="https://www.linkedin.com/in/chriswoosley/"
                        target="_blank"
                      >
                        {' '}
                        Linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Render a helpful message otherwise
            <div>
              <h1>No passwords :(</h1>
              <button className="more" onClick={this.getPasswords}>
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
