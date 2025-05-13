import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>About This App</h2>
      <p>
        This React Task Manager demonstrates:
      </p>
      <ul>
        <li>Data fetching via <code>useEffect</code> from JSONPlaceholder</li>
        <li>Loading and error states</li>
        <li>Client‐side routing with React Router</li>
        <li>Controlled components and side‐effect hooks</li>
        <li>UI feedback for task completion</li>
      </ul>
    </div>
  );
}
