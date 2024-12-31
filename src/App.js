import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Shop from './component/Shop';

function App() {
  return (
    <div>

     {/* routing */}
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/shop" element={ <Shop/> } />
      </Routes>
    </div>
  );
}

export default App;
