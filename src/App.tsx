import React,{useState} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import NavBar from './components/NavBar'
import People from "./components/People";
import Planet from "./components/Planet";

function App() {
  const [page,setPage] = useState('Planets')
  const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
    <div className="App">
      <header className="App-header">
        <NavBar setPage={setPage}/>
        <div className="content">
          {page==='Planets' ? <Planet />:<People /> }
        </div>
      </header>
    </div>
      </QueryClientProvider>
  );
}

export default App;
