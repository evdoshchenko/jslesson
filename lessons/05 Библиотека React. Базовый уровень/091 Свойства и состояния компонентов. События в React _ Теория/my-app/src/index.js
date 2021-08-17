import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';

// function WhoAmI(props) {
//   return (  //     <> можно без использование Fragment
//     <React.Fragment>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </React.Fragment>
//   )
// }

// function WhoAmI({ name, surname, link }) {
//   return (
//     <>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </>
//   )
// }

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    }
    // this.nextYear = this.nextYear.bind(this);
    this.nextYear = () => {
      this.setState(state => ({
        years: ++state.years
      }))
    }
  }


  // state = {         //ES9
  //   years: 26
  // }
  // nextYear = () => {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  // nextYear() {
  //   // this.state.years++; так не работает
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }


  render() {
    const { name, surname, link } = this.props;
    const { years } = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years -{years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="Dan" surname="Ban" link="https://google1.com" />
      <WhoAmI name="Dan2" surname="Ban" link="https://google2.com" />
      <WhoAmI name="Dan3" surname="Ban" link="https://google3.com" />
    </>
  )
}
ReactDOM.render(
  <All />,
  document.getElementById('root')
);


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


