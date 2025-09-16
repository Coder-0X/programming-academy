import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const LoginPage = () => {
  const navigate = useNavigate();
  if (!clientId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-red-600">
            Error: Missing Google OAuth client ID.
            <br />
            Please set <code>VITE_GOOGLE_CLIENT_ID</code> in <code>.env.local</code> and restart the server.
          </p>
        </div>
      </div>
    );
  }
  const { setAuthToken } = useAuth();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <GoogleLogin
          onSuccess={credentialResponse => {
            if (credentialResponse.credential) {
              setAuthToken(credentialResponse.credential);
              navigate('/');
            }
          }}
          onError={() => setError('Login Failed')}
        />
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <button onClick={() => navigate('/register')} className="text-blue-600 hover:underline">
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
