import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Bisection from './Element/Bisection';
import False from './Element/False';
import Secant from './Piyada';
import Newton from './Element/Newton';
import Onepoint from './Element/Onepoint';
import Piyada from './Piyada';
import Matrix from './Matrix/Matrix';
import Matrixx from './Matrix/Matrixx';
import {Navbarr} from './Navbarr';
import FormContext from 'rc-field-form/es/FormContext';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarr/>
      <Routes>
        <Route path='/Bisection' element={<Bisection/>} />
        <Route path='/False' element={<False/>} />
        <Route path='/Newton' element={<Newton/>} />
        <Route path='/Matrix' element={<Matrix/>} />
        <Route path='/Matrixx' element={<Matrixx/>} />
        <Route path='/Home' element={<Home/>} />

      </Routes>
        
      
      </BrowserRouter>
     
    </div>
   
      
   
  );
}

export default App;