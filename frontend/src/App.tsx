import React from 'react';
import './App.css';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import Statistics from './components/Statistics';
import { Global, css } from '@emotion/react';

const App: React.FC = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
          }
        `}
      />
      <div style={{ padding: '20px' }}>
        <h1>Song Manager</h1>
        <SongForm />
        <SongList />
        <Statistics />
      </div>
    </div>
  );
};

export default App;
