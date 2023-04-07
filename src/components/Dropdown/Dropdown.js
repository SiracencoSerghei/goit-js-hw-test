import React, { Component } from "react";
import './Dropdown.css';

// class Dropdown extends Component {
//     state = {
//         visible: false,
//     };

//     show = () => {
//         this.setState({visible: true});
//     }

//     hide = () => {
//         this.setState({visible: false})
//     }

//     render() {
//         return (
//             <div className="Dropdown">
//                 <button type="button" className="Dropdown__toggle" onClick={this.show}>
//                     show
//                 </button>
//                 <button type="button" className="Dropdown__toggle" onClick={this.hide}>
//                     hide
//                 </button>
//                 {this.state.visible && (<div className="Dropdown__menu">
//                     drop-down menu
//                 </div>)}
//             </div>
//         )
//     }
// }

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    }


    render() {
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
                    {!this.state.visible ? 'show' : 'hide'}
                </button>
                {this.state.visible && (<div className="Dropdown__menu">
                    drop-down menu
                </div>)}
            </div>
        )
    }
}

export default Dropdown;