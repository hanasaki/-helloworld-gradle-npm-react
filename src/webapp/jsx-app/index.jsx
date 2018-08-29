import React from 'react';
import {render} from 'react-dom';
import ButtonCounterComponent from './ButtonCounterComponent.jsx';

class App extends React.Component {
    render() {
        return (
                <div>
                    <p>Counter: <ButtonCounterComponent /></p>
                </div>
                );
    }
}

render(<App/>, document.getElementById('app'));
