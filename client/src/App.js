
import './App.css';
import { DataContextProvider } from './contexts/dataContext';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/features/Header/Navbar';
import Footer from './components/features/Footer/Footer';
import Router from './routes/Router';
function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <BrowserRouter>
          <Navbar />
          <Router />
          <Footer />
        </BrowserRouter>
      </DataContextProvider>

    </div>
  );
}

export default App;
