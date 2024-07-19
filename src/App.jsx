import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import SellerPage from './pages/SellerPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer'
// import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen max-h-screen max-w-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      </main>
      <div>
      <Footer/></div>
      </div>
    </Router>
  );
}

export default App;
