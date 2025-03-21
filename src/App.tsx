import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CaseList from './pages/CaseList';
import CustomerList from './pages/CustomerList';
import CustomerRegister from './pages/CustomerRegister';
import AppLayout from './components/layout/AppLayout';
import NoMatch from './pages/NoMatch';
import Login from './Login/Login';
import Logout from './pages/Logout';
import { theme } from './theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* ログインページ */}
          <Route path="/login" element={<Login />} />

          {/* ログイン後に表示されるページ */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<CaseList />} />
            <Route path="/customerlist" element={<CustomerList />} />
            <Route path="/customerregister" element={<CustomerRegister />} />
            <Route path="*" element={<NoMatch />} />
          </Route>

          {/* ログアウトページ */}
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
