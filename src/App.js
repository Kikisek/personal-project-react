import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoggedIn: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    this.setState({ isLoggedIn: true });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ?
          <div>Logged In</div>
          :
          <form onSubmit={this.handleSubmit}>
          <label>Github Username:
            <input value={this.state.username} onChange={this.handleChange} required/>
          </label>
          <button type="submit">Submit</button>
        </form>
        }
      </div>
    );
  }
}

export default App;