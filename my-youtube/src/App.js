import './App.css';
import Header from './pages/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from 'react-router-dom';
const queryClient = new QueryClient();
console.log('queryClient', queryClient);

function App() {
  return (
    <div className='flex flex-col justify-center'>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />  
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>

  );
}

export default App;
