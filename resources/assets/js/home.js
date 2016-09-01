
require('./bootstrap');

import React from 'react';

import {render as ReactDOM} from 'react-dom';

import LoginForm from './home/LoginForm.js';

ReactDOM(<LoginForm />, document.getElementById('loginForm'));
