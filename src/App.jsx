import React from 'react'
import Dictionary from './components/Dictionary';
import Translator from './components/Translator';
function App() {
  return (
    <div className='flex'>
      <Dictionary />
      <Translator />
    </div>
  )
}

export default App