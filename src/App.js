
import { Route,  Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import CheckUser from './components/CheckUser';
import LoginForm from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginForm/>} />
      <Route path='/signup' element={<Signup/>} />

      <Route path='dashboard' element={
        <CheckUser>
          <Dashboard />
        </CheckUser>
      } />

    </Routes>
    </div>

  );
}

export default App;
