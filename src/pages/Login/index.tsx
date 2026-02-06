import React from 'react';
import styles from './index.module.scss';
import { Apple, Smartphone } from 'lucide-react'; // Using some available icons as placeholders
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* Left Section - Form */}
      <div className={styles.leftSection}>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <h1>Welcome back</h1>
            <p>Login to your Acme Inc account</p>
          </div>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/dashboard');
            }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="m@example.com" 
                autoComplete="email"
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="password">Password</label>
                <a href="#">Forgot your password?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>

          <div className={styles.divider}>
            <span>Or continue with</span>
          </div>

          <div className={styles.socialButtons}>
            <button type="button" aria-label="Login with Apple">
              <Apple />
            </button>
            <button type="button" aria-label="Login with Google">
              {/* Google icon usually requires a custom SVG, using Command as placeholder */}
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>G</span> 
            </button>
            <button type="button" aria-label="Login with Other">
               <Smartphone />
            </button>
          </div>

          <div className={styles.footer}>
            Don't have an account? 
            <a href="#">Sign up</a>
          </div>
        </div>
      </div>

      {/* Right Section - Image/Placeholder */}
      <div className={styles.rightSection}>
        {/* Placeholder for the image/graphic */}
        <div className={styles.placeholderIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default Login;
