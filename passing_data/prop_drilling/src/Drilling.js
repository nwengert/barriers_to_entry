import React, { Component } from 'react';

class Parent extends React.Component {
  state = {
     value: 'rumors'
  };
  render() {
    return(
      <div>
        <h1>Parent</h1>
        <p>{this.state.value}</p>
        <Child1 value={this.state.value}/>  
      </div>  
    );
  }
}

const Child1 = (props) => (
  <div>
  <h1>Child1</h1>
  <p>{props.value}</p>
  <Child2 value={props.value} />
  </div>
 );
  
 const Child2 = (props) => (
  <div>
    <h2>Child2</h2>
    <div>{props.value}</div>
    <Child3 value={props.value} />
  </div>
 );

 const Child3 = (props) => (
  <div>
    <h3>Child3</h3>
    <div>{props.value}</div>
    {/* <Child4 value={props.value} /> */}
  </div>
 );

// const Child4 = (props) => (
//   <div>
//     <h4>Child4</h4>
//     <div>{props.value}</div>
//   </div>
//  );




export default class Drilling extends Component {
  render() {
    return (
      <div className="App">
        <Parent />
      </div>
    );
  }
}
