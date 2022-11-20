import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './screens/landing';
import Pricing from './screens/pricing';
import Contact from './screens/contact';
import Find from './screens/findus';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/findus" element={<Find/>}/>
      </Routes>
    </Router>
  );
}

export default App;
