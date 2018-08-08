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

      <div className="jumbotron center-60">

        <div className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="30" height="30" className="d-inline-block align-top" />
            Demo
          </a>
          <div className="dropdown float-right">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown Links
            </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="https://github.com/cwooz/demoReactApp" target="_blank">View the Code</a>
                <a className="dropdown-item" href="https://www.npmjs.com/package/password-generator" target="_blank">NPM/password-generator</a>
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


<div Name="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>


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