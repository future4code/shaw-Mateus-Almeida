import React from "react";
import { ThemeProvider } from "@mui/material";
import Router from "./Routes/Router";
import theme from "./Constants/theme";

// usei o thema e chamei a cor do thema que esta na apgina de constants
function App() {
  return (
    <ThemeProvider theme={theme}>
    
     <Router/>
     
    </ThemeProvider>
  );
}

export default App;
//