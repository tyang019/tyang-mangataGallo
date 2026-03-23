import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './scripts/App.jsx'
import { BagProvider } from './context/BagContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BagProvider>
      <App />
    </BagProvider>
  </BrowserRouter>
)
