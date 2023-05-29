import React from 'react'
import './App.scss';
import { Header } from './components/Header';
import { Button } from 'shared-ui';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <Button />

      <main className="app__content-container">
        <h1>
          Hello
        </h1>
      </main>
    </div>
  )
};
