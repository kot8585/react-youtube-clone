import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
const queryClient = new QueryClient();
console.log('queryClient', queryClient);

function App() {
  return (
    <div className='flex flex-col justify-center px-72 '>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />  
      </QueryClientProvider>
    </div>

  );
}

export default App;
