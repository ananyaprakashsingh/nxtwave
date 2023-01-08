import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/form/Form';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/create_item' element={<Form />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
