import React from 'react';
import PropTypes from 'prop-types';


// const Button = ({ className = '', text = 'Button', onClick = () => { } }) => {
//     return (
//         <button className={className} onClick={onClick}>
//             {text}
//         </button>
//     );
// };
// Button.defaultProps = {
//     className: '',
//     text: 'Button',
//     onClick: () => { },
// };

class Button extends React.Component {
    static defaultProps = {
        className: '',
        text: 'Button',
        onClick: () => { },
    };
  render() {
      return <button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>;
  }
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};


export {Button};