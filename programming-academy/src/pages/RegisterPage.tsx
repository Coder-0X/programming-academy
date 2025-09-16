import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RegisterPage = () => {
  const { setAuthToken } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = (response: any) => {
    if (response.credential) {
      setAuthToken(response.credential);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => setError('Registration Failed')}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
