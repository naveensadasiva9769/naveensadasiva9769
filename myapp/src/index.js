import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './Functional';
import ClassComponent from './components/ClassComponent';
import UnionBank from './components/UnionBank';
import AndhraBank from './components/AndhraBank';
import stateinClassComponent from './components/StateinClassComponent';
import StateinClassComponent from './components/StateinClassComponent';
import StateInFunctionalComponent from './components/StateInFunctionalComponent';
import ListRendering from './components/ListRendering';
import FormRendering from './components/FormRendering';
import Home from './components/Home';
import FormRenderingInFunctions from './components/FormRenderingInFunctions';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Functional/>
    <ClassComponent/> */}
    {/* <UnionBank/> */}
    {/* <AndhraBank/> */}
    {/* <StateinClassComponent/> */}
    {/* <StateInFunctionalComponent/> */}
    {/* <ListRendering/> */}
    {/* <FormRendering/> */}
    {/* <Home/> */}<FormRenderingInFunctions/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
