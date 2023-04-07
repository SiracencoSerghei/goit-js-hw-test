import React from "react";
import './Controls.css';

// const Controls = () => (
//     <div className="Counter_controls">
//             <button type="button" onClick={this.handleDecrement}>DECREMENT</button>
//             <button type="button" onClick={this.handleIncrement}>INCREMENT</button>
//             </div>
// );

const Controls = ({onDecrement, onIncrement}) => (
    <div className="Counter_controls">
            <button type="button" onClick={onDecrement}>DECREMENT</button>
            <button type="button" onClick={onIncrement}>INCREMENT</button>
            </div>
);

export default Controls;