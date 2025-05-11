import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import {configureStore} from "@/store/configureStore.js";
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "@/utils/utilPages/ScrollToTop.js";

const store = configureStore()

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <ScrollToTop />
          <App />
      </BrowserRouter>
      </Provider>
  </StrictMode>,
)
