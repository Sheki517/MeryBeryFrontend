import { useState } from 'react';
import { auth, googleProvider } from '../../firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Successfully logged in:', result.user);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="left-content">
          <h1 className="banner-title">
            MERY BERY FLOWER MARKETPLACE
          </h1>
          <p className="banner-description">
            Discover the perfect blooms for your special moments. Our curated collection of fresh flowers 
            brings beauty and elegance to every occasion.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="login-card">
          <div className="card-header">
            <h2 className="card-title">Welcome Back</h2>
            <p className="card-subtitle">Sign in to your account</p>
          </div>

          {error && (
            <div className="error-message" role="alert">
              <span>{error}</span>
            </div>
          )}

          <div className="button-container">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="google-button"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </div>
              ) : (
                <>
                  <img
                    className="google-icon"
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google logo"
                  />
                  Sign in with Google
                </>
              )}
            </button>

            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-text">Or</div>
            </div>

            <button
              onClick={() => navigate('/signup')}
              className="create-account-button"
            >
              Create an Account
            </button>
          </div>

          <div className="terms-text">
            <p>
              By signing in, you agree to our{' '}
              <a href="#" className="terms-link">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="terms-link">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 