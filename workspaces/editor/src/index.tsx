import React, { StrictMode } from 'react';
import { App } from '@/app';
import { createRoot } from 'react-dom/client';

import '@/styles.css';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
