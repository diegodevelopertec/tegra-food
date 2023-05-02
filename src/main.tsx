import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import store, { RootState } from './redux/store'
import { Provider } from 'react-redux'
import { AppProvider } from './Context/appProvider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <AppProvider>
    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>
  </AppProvider>
  </Provider>
)
