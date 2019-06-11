import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './index.css';

let destination = document.querySelector('#root');

ReactDOM.render(<TodoList />, destination);