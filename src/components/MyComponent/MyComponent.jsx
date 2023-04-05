import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleIncrementClick = () => {
        this.setState(increment => {
          return { count: this.state.count + 1 });
    };
    handleDecrementClick = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleDecrementClick}>Decrement</button>
                <button onClick={this.handleIncrementClick}>Increment</button>
            </div>
        );
    }
}

export {MyComponent};
