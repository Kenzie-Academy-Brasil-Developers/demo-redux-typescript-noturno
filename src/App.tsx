import './App.css';
import Button from './components/button/Button';
import Display from './components/display/Display';
import { useDispatch } from 'react-redux';
import { addCounterThunk, subCounterThunk } from './store/modules/counter/thunk';

function App() {

  const dispatch = useDispatch<any>()

  const add = () =>{
    dispatch(addCounterThunk(1))
  }

  const sub = () =>{
    dispatch(subCounterThunk(1))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <div>
          <Button func={sub} color="red">Subtrai</Button>
          <Button func={add}>Adiciona</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
