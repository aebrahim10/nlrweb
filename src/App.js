import './App.css';
import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className="app">
            <main className="content">
            {/* <Routes>
                 <Route path="/" element={<Dashboard />} /> 
            </Routes> */}
              Hello
             </main> 
            </div>
       </ThemeProvider>   
       </ColorModeContext.Provider>  
  );
}

export default App;
