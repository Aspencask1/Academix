import React, { useState, useEffect } from 'react';
import { AdminNavbar } from './AdminNavbar';
import { Dashboard } from './Dashboard';
import { AddEvent } from './AddEvent';
import { AddCourse } from './AddCourse';
import { Analytics } from './Analytics';
import { Users } from './Users';
import { adminStyles } from './AdminStyles';
import { Settings } from './Settings/Settings';

export const Admin: React.FC = () => {
  // Initialize activeTab from localStorage, default to 'dashboard' if not set
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem('activeTab') || 'dashboard';
  });

  // Update localStorage whenever activeTab changes
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'events':
        return <AddEvent />;
      case 'courses':
        return <AddCourse />;
      case 'users':
        return <Users />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const handleLogout = () => {
    // Clear activeTab from localStorage on logout
    localStorage.removeItem('activeTab');
    console.log('Logout clicked');
  };

  return (
    <div style={adminStyles.container}>
      <AdminNavbar activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout} />
      <main style={adminStyles.content}>
        {renderContent()}
      </main>
    </div>
  );
};