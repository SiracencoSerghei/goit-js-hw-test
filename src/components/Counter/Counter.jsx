
import React from 'react';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/actions';
import {getCount} from '../../redux/selectors'

const Counter = () => {
  // // State: a counter value
  // const [counter, setCounter] = useState(0)

  // // Action: code that causes an update to the state when something happens
  // const increment = () => {
  //   setCounter(prevCounter => prevCounter + 1);
  // }

  // const decrement = () => {
  //   setCounter(prevCounter => prevCounter - 1);
  // }

  const counter = useSelector(getCount)
  const dispatch = useDispatch()

  // View: the UI definition
  return (
    // <div>
    //   Value: {counter} <Button onClick={increment}>Increment</Button>
    //   <Button onClick={decrement}>Decrement</Button>
    // </div>
    <div>
      Value: {counter} 
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
};

export default Counter;


