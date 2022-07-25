import React from 'react';
import { Header } from './components/header/header';
import { TaskCards } from './components/task/taskCards';

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
