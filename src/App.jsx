import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import LocationsPage from './pages/LocationsPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/locations" element={<LocationsPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
