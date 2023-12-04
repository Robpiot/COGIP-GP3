import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/assets/css/style.css'
import { HomePage } from './components/ListofInvoices';

function App() {

  return (
    <>
      <div>
        <HomePage />
      </div>
    </>
  )
}

export default App
