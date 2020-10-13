import React from "react";

interface ClassComponentState {
    date: Date;
    timerId :any;
}

class ClassComponent extends React.Component<{},ClassComponentState> {
    constructor() {
        super({});
        this.state = {date: new Date(),timerId:''};
    }

    componentDidMount() {
        this.setState({timerId:setInterval(
            () => this.tick(),
            1000
        )});
    }
    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <br/>
                <h5>#### In this app we use State in Class Component</h5>
                <h3>Date is {this.state.date.toLocaleDateString()}.</h3>
                <h3>Time is {this.state.date.toLocaleTimeString()}.</h3>
                <h3>DateTime is {this.state.date.toLocaleString()}.</h3>
            </div>
        );
    }
}

export default ClassComponent;
