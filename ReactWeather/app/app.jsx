let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}></Route>
  </Router>,
  document.getElementById('app')
);