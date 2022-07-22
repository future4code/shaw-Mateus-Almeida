import React from "react";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import Router from "./Routes/Router";
import theme from "./Constants/theme";
import {GlobalStyled} from "./GlobalStyled"

// usei o thema e chamei a cor do thema que esta na apgina de constants
function App() {
  return (
    <ThemeProvider theme={theme}>
   <GlobalStyled/>
     <Router/>
     
    </ThemeProvider>
  );
}

export default App;
//