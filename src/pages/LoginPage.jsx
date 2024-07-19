import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer'); // Default role set to 'buyer'
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Replace this with actual authentication logic
    login(username);
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'seller') {
      navigate('/seller');
    } else {
      navigate('/user'); // Assuming 'buyer' navigates to '/user'
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="text-xl border p-2 m-2 w-full max-w-xs"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 m-2 w-full max-w-xs"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 m-2 w-full max-w-xs"
      >
        <option value="admin">Admin</option>
        <option value="seller">Seller</option>
        <option value="buyer">Buyer</option>
      </select>
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 m-2 w-full max-w-xs">
        Login
      </button>
    </div>
  );
}

export default LoginPage;
