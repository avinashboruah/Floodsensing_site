import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: '#1B1B1E',
            color: '#fff',
            padding: '4rem',
            textAlign: 'center',
            gap: '1rem',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Something went wrong.</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Please try refreshing the page.</p>
          <a href="/" style={{ color: '#58A4B0', textDecoration: 'underline' }}>
            Go home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
