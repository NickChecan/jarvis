import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        {/*<App/>*/}
        <StyledEngineProvider injectFirst> {/* Ensures Material UI styles apply first */}
            <ThemeProvider theme={defaultTheme}> {/* Provides Material UI theme */}
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
