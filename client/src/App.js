
import './App.css';
import { DataContextProvider } from './contexts/dataContext';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/features/Navbar';
function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </DataContextProvider>

    </div>
  );
}

export default App;
