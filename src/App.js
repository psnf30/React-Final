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



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarr/>
      <Routes>
        <Route path='/Bisection' element={<Bisection/>} />
        <Route path='/False' element={<False/>} />
        <Route path='/Onepoint' element={<Onepoint/>} />
        <Route path='/Newton' element={<Newton/>} />
      </Routes>
        
      
      </BrowserRouter>
     
    </div>
   
      
   
  );
}

export default App;