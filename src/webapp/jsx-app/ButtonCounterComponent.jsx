import React from 'react';

class ButtonCounterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentCount: 0};
        this.eventOnClick = this.eventOnClick.bind(this);
    }

    eventOnClick() {
        let nextCount = this.state.currentCount + 1;
        this.setState({currentCount: nextCount});
    }

    render() {
        return (
                <div>
                    count={this.state.currentCount}
                    <button onClick={this.eventOnClick}>+1</button>
                </div>
                );
    }

}

export default ButtonCounterComponent;
