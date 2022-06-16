import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTittle from './components/PageTittle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTittle>Act More,Plan Less!</PageTittle>
        <div className="{styles.app__wrapper}" />
        <AppHeader />
        <AppContent />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{ style: { fontSize: '1.5rem' } }}
      />
      <div className="footer">
        <a
          href="https://github.com/codeWithBijaya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="github" />
        </a>
      </div>
    </>
  );
}

export default App;
