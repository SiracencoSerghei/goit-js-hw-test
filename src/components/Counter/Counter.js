import React from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';


// class Counter extends React.Component {

//     // handleDecrement() {
//     //     console.log('clicked to decrement');
//     //     console.log(this);
//     // }
//     handleDecrement = (event) => {
//         console.log('clicked to decrement');

//         // const target = event.target;
//         const {target} = event;

//         setTimeout(()=>{console.log(this);
//             console.log(event.type);
//             console.log(target);
//             console.log(event.currentTarget);}, 2000)
//             }
//     handleIncrement = (event) => {
//         console.log('clicked to increment');
//          console.log(this);
//          console.log(event.type);
//         console.log(event.target);
//         console.log(event.currentTarget);
//     }

//     render() {
//         return (
//             // <div className="Counter">
//             // <span className="Counter_value">0</span>
//             // <div className="Counter_controls">
//             // <button type="button" onClick={()=>{console.log('clicked to decrement')}}>DECREMENT</button>
//             // <button type="button" onClick={() => {console.log('clicked to increment')}}>INCREMENT</button>
//             // </div>
//             // </div>

//             <div className="Counter">
//             <span className="Counter_value">0</span>
//             <div className="Counter_controls">
//             <button type="button" onClick={this.handleDecrement}>DECREMENT</button>
//             <button type="button" onClick={this.handleIncrement}>INCREMENT</button>
//             </div>
//             </div>
//         )
//     }
// }
// ===================================================

// class Counter extends React.Component {

//     // constructor() {

//         static defaultProps = {
//             initialValue: 0,
//         }
//         static propTypes = {
//             //
//         }

//     //     super();

//     //     this.state = {
//     //         value: 0,
//     //     };
//     // }  // BABEL DO =====>>

//     // state = {
//     //     value: 0,
//     // };

//     state = {
//         value: this.props.initialValue,
//     };

//     handleDecrement = () => {
// // this.state.value = 6; !!!!!!!!!!!!!!!!!!!!! NO NO NO !!!!
// // this.setState({
// //     // value: 10,
// //     // value: this.state.value +1,  //  <=== not good but work
// //     // value: this.state.value +1,  //  <=== not good but work
// //     // value: this.state.value +1,  //  <=== not good but work
// // })

//         this.setState(prevState => {
//             return {
//                 value: prevState.value + 1,
//             }
//         }
//         )
//         // this.setState(prevState => {
//         //     return {
//         //         value: prevState.value + 9,
//         //     }
//         // }
//         // )

//             }
//     handleIncrement = () => {
//         this.setState(prevState => {
//             return {
//                 value: prevState.value - 1
//             }
//         })
//     }

// =============================================

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    //
  };
  state = {
    value: this.props.initialValue,
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <Value value = {this.state.value}/>
        {/* <span className="Counter_value">{this.state.value}</span> */}
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
        {/* <div className="Counter_controls">
            <button type="button" onClick={this.handleDecrement}>DECREMENT</button>
            <button type="button" onClick={this.handleIncrement}>INCREMENT</button>
            </div> */}
      </div>
    );
  }
}

export default Counter;
