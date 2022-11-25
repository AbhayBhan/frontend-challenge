import React from 'react';
import { CardDisplay } from './components/CardDisplay';
import CardForm from './components/CardForm';
import './App.css';

function App() {

  return (
    <div className='Container'>
      <CardDisplay />
      <CardForm />
    </div>
  )
}

export default App
