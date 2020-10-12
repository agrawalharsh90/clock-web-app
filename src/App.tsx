import React from 'react';

function App() {
    return (
        <div>
            <h1>Current Time!</h1>
            <h4>In this app we render element in DOM everytime</h4>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default App;
