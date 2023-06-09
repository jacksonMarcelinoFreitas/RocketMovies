import GlobalStyles from './styles/globalStyles.js';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client'
import theme from './styles/theme.js';
import React from 'react'

// import { CreateMovie } from './pages/CreateMovie';
// import { SignIn } from './pages/SignIn';
// import { SignUp } from './pages/SignUp';
// import { Home } from './pages/Home';
// import { Profile } from './pages/Profile';
// import { MoviePreview } from './pages/MoviePreview';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles/>
        <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
