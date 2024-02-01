import { UseSelector,useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increament = () => {
    dispatch({type:"inc"})
  }
  const decrement =() => {
    dispatch({type:"dec"})
  }
  const add = () => {
    dispatch({type:"add",payload:10})
  }
  console.log(counter)
  return (
    <div>
     <h1>Counter Application</h1>
     <h2>{counter}</h2>
     <button type="button" onClick={increament}>increament</button>
     <button type="button" onClick={decrement}>decrement</button>
     <button type="button" onClick={add}>Add</button>
    </div>
  );
}

export default App;
