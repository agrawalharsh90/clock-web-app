import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReRenderDom from "./components/ReRenderDom";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from './components/ClassComponent';

/// For dom re render

function tick() {
    ReactDOM.render(
        <ReRenderDom date={new Date()}/>,
        document.getElementById('root1')
    );
}

setInterval(tick, 1000)


/// For class component

ReactDOM.render(
    <ClassComponent/>,
    document.getElementById('root2')
);


// / For functional component

ReactDOM.render(
    <FunctionalComponent/>,
    document.getElementById('root3')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
