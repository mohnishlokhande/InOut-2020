import React from 'react';
import './App.css';
import Main from './component/Main';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" };

  }
  callAPI() {
    fetch("http://localhost:9001/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err=>err);
  }

  componentDidMount() {
    this.callAPI();
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        {/* <p className="apiintro"> {this.state.apiResponse}</p> */}
          <Main></Main>
          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
