import React, { useState } from 'react';
import { useAuth } from './AuthProvider';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      height: '100vh',
      backgroundColor: '#1C2128',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '90%',
        padding: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px'
      }}>
        <h1 style={{ 
          fontSize: '24px',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Studio de IA - Development
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px'
              }}
              required
            />
          </div>
          {error && (
            <div style={{ 
              color: '#DC0017',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#DC0017',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}