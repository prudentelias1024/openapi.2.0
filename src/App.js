import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';

import './App.css';
import Home from './Home';

function App() {

  return (
 
 <Router>
 <Routes>
  <Route path='/' element={<Home/>}/>


 </Routes>

</Router>

  );
}

export default App;
