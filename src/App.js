import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeScreen name="Jacob Burritt" subtitle="designer/developer"></HomeScreen>
    </div>
  );
}

class Name extends React.Component{
  render(){
    return <h1 className="NameBanner">{this.props.name}</h1>
  }
}

class Subtitle extends React.Component{
  render(){
    return <h2 className="NameSubtitle">{this.props.subtitle}</h2>
  }
}

class Links extends React.Component{
  render(){
    return(
      <div className="links">
        <a href="#AboutMe">About Me</a>
        <a href="#Resume">Resume</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </div>
      
    );
  }
}

class Menu extends React.Component{
  render(){
    return (
      <div className="Menu">
        <Name name={this.props.name}></Name>
        <Subtitle subtitle={this.props.subtitle}></Subtitle>
        <Links></Links>
      </div>
    );
  }
}

class HomeScreen extends React.Component{
  render(){
    return (
      <div className="MenuDiv">
        <Menu name={this.props.name} subtitle={this.props.subtitle}></Menu>
        <video>
          <source src="./video.mp4" type="video/mp4"></source>
        </video>
      </div>
    );
  }
}
export default App;
