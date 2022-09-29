import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutView from './components/AboutView'
import { Routes, Route } from 'react-router-dom';



// installing React router
function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutView />} />
        </Routes>
    </div>
  );
}

export default App;
