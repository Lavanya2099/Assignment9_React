
import './App.css';
import Counter from './components/Counter';
import Parent from './components/Parent';
import  ClickCounter  from './hoc/ClickCounter';
import  HoverCounter  from './hoc/HoverCounter';
import Countertwo from './useReducer/Countertwo';


function App() {
  return (
    <div className="App">
     <Parent/>
     <Counter/>
     <ClickCounter/>
     <HoverCounter/>
     <Countertwo/>
    </div>
  );
}

export default App;
