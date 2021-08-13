import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const elem = <h2>Hellow world!</h2>
// const elem = React.createElement('h2', null, "Hello world!!!")


const Header = () => {
  // const scr = '<script>alert("Error")</script>';
  // return <h2>{scr}</h2>
  return <h2>Hellow world!</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styledField = {
    width: '300px'
  }

  return <input
    style={styledField}
    type="text"
    placeholder={holder}
    autoComplete=""
    className="first"
    htmlFor="" />
  // return <input type="text" placeholder="Type here" />
}

const Btn = () => {
  const text = "Log in";
  const logged = true;

  return <button>{logged ? "Enter" : text}</button>
  // const res = () => {
  //   return 'Log in, please'
  // }
  // return <button>{res()}</button>
  // const p = <p>Log in</p>
  // return <button>{p}</button>
  // return <button>{3 + 4}</button>

}

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Btn />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
