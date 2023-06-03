import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store,persistor} from "./Redux/Store.js"
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router.jsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={Router}></RouterProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
