import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import combinedStore from './reducers/root-reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={combinedStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
