import React from 'react'; //biblioteca
import ReactDOM from 'react-dom'; // enfocado al navegador

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker'; // Si se va el internet puede seguir funcionando...

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// *********** ESTE ARCHIVO ES EL QUE ARRANCA LA APP !! DONDE RENDERIZA LA APP... PRINCIPAL "MAIN"