import React, {Component} from 'react';
import './App.css';
import Main from './component/Main';
import { BrowserRouter } from 'react-router-dom';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };

  }
  callAPI() {
    fetch("https://localhost:3001/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        
          <Main></Main>
          <p>{this.state.apiResponse}</p>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
