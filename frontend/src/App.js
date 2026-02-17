import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router = URL changes → Component changes → Page stays
import LandingPage from './pages/landing';
import Authentication  from './pages/authentication';
function App() {
  return (
    <>
      <Router>

        <Routes>
          
         
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication/>} />
          
        </Routes>

      </Router>
    </>
  );
}

export default App;
