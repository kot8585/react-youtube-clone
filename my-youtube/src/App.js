import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col justify-center'>
      <Header />
      <Outlet />
    </div>

  );
}

export default App;
