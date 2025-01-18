import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { GlobalStyle } from './styles/style.ts'

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle>
      
      <App />

    </GlobalStyle>
   
  </> 
)
