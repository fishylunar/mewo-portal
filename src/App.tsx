/**
 * @file App.tsx
 * @type generic
 * @project Mewo Portal
 * @description Main App view.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import React from 'react';
import { useAuth } from './hooks/useAuth';
import { LoadingScreen } from './components/LoadingScreen';
import { LoginScreen } from './components/LoginScreen';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import './App.css'

const App: React.FC = () => {
  const {
    user,
    loading,
    userRoles,
    debugInfo,
    handleLogin,
    handleLogout,
  } = useAuth();

  if (loading) {
    return <LoadingScreen initAttempts={0} debugInfo={debugInfo} />;
  }

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <Header user={user} onLogout={handleLogout} />
      <Dashboard userRoles={userRoles} />
    </div>
  );
};

export default App;
