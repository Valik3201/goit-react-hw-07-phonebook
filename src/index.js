import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';

/**
 * Renders the main application component wrapped in necessary providers and elements.
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider for NextUI theme */}
    <NextUIProvider>
      {/* Redux Provider for store */}
      <Provider store={store}>
        {/* Main application component */}
        <App />
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
