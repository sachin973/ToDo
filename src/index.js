import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './style.css';
import TodoList from './todoList';
import KanbanBoard from './component/kanbanBoard'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const RouterMapping = () => (
  <Router>
    <Route exact path='/' component={TodoList} />
    <Route path='/kanban' component={KanbanBoard} />

  </Router>
);
root.render(
  <React.StrictMode>
    <RouterMapping  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







// import ReactDOM from 'react-dom';
//import RouterMapping from './RouterMapping';
// const RouterMapping = () => (
//   <Router>
//     <Route exact path='/' component={App} />
//     <Route path='/contact' component={Contact} />

//   </Router>
// );

// ReactDOM.render(
//   <RouterMapping />, 
//   document.getElementById('root')
// );