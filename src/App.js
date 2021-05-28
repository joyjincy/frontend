import './App.css';
import {BrowserRouter} from 'react-router-dom';
import OverView from './components/index';

function App() {
  return (
    <BrowserRouter>
      <OverView/>
    </BrowserRouter>
  );
}

export default App;
