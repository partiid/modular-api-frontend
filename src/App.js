import logo from './logo.svg';
import './assets/App.scss';
import {BrowserRouter as Router, Links, Routes, Route} from 'react-router-dom';
import {Login} from './components/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
