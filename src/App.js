
import React from 'react';

function App() {
  return (
    <div className='card'>
      <h1>RiskMate Demo</h1>
      <p>Welcome <strong>Jared Mutu</strong></p>
      <p>Select your action below:</p>
      <button onClick={() => alert('Simulating QR scan...')}>Scan Site QR</button><br /><br />
      <button onClick={() => alert('Induction preview...')}>Start Induction</button><br /><br />
      <button onClick={() => alert('View SWMS List')}>View SWMS</button><br /><br />
      <button onClick={() => alert('Complete Daily Prestart')}>Daily Prestart</button><br /><br />
      <button onClick={() => alert('Sign SWMS')}>Sign SWMS</button>
    </div>
  );
}

export default App;
