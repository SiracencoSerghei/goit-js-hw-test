import React, { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component {

    state = {
        activeOptionIdx: 2,
    };
    
    setActiveInd = (index) => {
        this.setState({activeOptionIdx: index})
    };

    makeOptionClassName = (index) => {
        const optionClasses = ['ColorPicker__option'];
        const{activeOptionIdx} = this.state;

                if(index === activeOptionIdx) {
                    optionClasses.push('ColorPicker__option--active');
                }
                return optionClasses.join(' ');
    };

    render() { 
        const{activeOptionIdx} = this.state;
        const {options} = this.props;
        const {label} = options[activeOptionIdx];
        
        return (
        <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <p>selected color: {label}</p>
        <div>
            {options.map(({label, color}, index) => {
              
                return(
<button key={label} className={this.makeOptionClassName(index)} style={{backgroundColor: color,}}  onClick={() => this.setActiveInd(index)}>
                    {label}
                </button>
                );
                })}
        </div>
    </div>
    );
    }
}

// =============================================
// class ColorPicker extends Component {

//     state = {
//         activeOptionIdx: 2,
//     };
    
//     setActiveInd = (index) => {
//         this.setState({activeOptionIdx: index})
//     };

//     makeOptionClassName = (index) => {
//         const optionClasses = ['ColorPicker__option'];

//                 if(index === this.state.activeOptionIdx) {
//                     optionClasses.push('ColorPicker__option--active');
//                 }
//                 return optionClasses.join(' ');
//     };

//     render() { 
//         // const activeOptionLabel = this.props.options[this.state.activeOptionIdx];
//         // console.log(activeOptionLabel);
//         const {label} = this.props.options[this.state.activeOptionIdx];
        
//         return (
//         <div className="ColorPicker">
//         <h2 className="ColorPicker__title">ColorPicker</h2>
//         <p>selected color: {label}</p>
//         <div>
//             {this.props.options.map(({label, color}, index) => {
              
//                 return(
// <button key={label} className={this.makeOptionClassName(index)} style={{backgroundColor: color,}}  onClick={() => this.setActiveInd(index)}>
//                     {label}
//                 </button>
//                 );
//                 })}
//         </div>
//     </div>
//     );
//     }
// }

// ==========================================================
// class ColorPicker extends Component {

//     state = {
//         activeOptionIdx: 3,
//     }

//     makeOptionClassName = (index) => {
//         const optionClasses = ['ColorPicker__option'];

//                 if(index === this.state.activeOptionIdx) {
//                     optionClasses.push('ColorPicker__option--active');
//                 }
//                 return optionClasses.join(' ');
//     };

//     render() { 
//         return (
//         <div className="ColorPicker">
//         <h2 className="ColorPicker__title">ColorPicker</h2>
//         <div>
//             {this.props.options.map(({label, color}, index) => {
//               const optionClassName = this.makeOptionClassName(index);  

//                 return(
// <button key={label} className={optionClassName} style={{backgroundColor: color,
//      border: index === this.state.activeOptionIdx ? '3px solid black' : 'none'
//      }}>
//                     {label}
//                 </button>
//                 );
                
//                 })}
//         </div>
//     </div>
//     );
//     }
// }

// =================================================================
// class ColorPicker extends Component {

//     state = {
//         activeOptionIdx: 3,
//     }


//     render() { 
//         return (
//         <div className="ColorPicker">
//         <h2 className="ColorPicker__title">ColorPicker</h2>
//         <div>
//             {this.props.options.map(({label, color}, index) => {
//                 const optionClasses = ['ColorPicker__option'];

//                 if(index === this.state.activeOptionIdx) {
//                     optionClasses.push('ColorPicker__option--active');
//                 }

//                 return(
// <button key={label} className={optionClasses.join(' ')} style={{backgroundColor: color,
//      border: index === this.state.activeOptionIdx ? '3px solid black' : 'none'
//      }}>
//                     {label}
//                 </button>
//                 );
                
//                 })}
//         </div>
//     </div>
//     );
//     }
// }
// =================================================================
// const ColorPicker = ({options}) => (
//     <div className="ColorPicker">
//         <h2 className="ColorPicker__title">ColorPicker</h2>
//         <div>
//             {options.map(({label, color}) => (
//                 <span key={label} className="ColorPicker__option" style={{backgroundColor: color}}>
//                     {label}
//                 </span>
//             ))}
//         </div>
//     </div>
// );



export default ColorPicker;