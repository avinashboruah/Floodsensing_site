import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import InsightAssamFloodPage from './pages/InsightAssamFloodPage';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/insights/assam-flood-2026" element={<InsightAssamFloodPage />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
