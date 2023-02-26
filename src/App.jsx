import Alloc from "./pages/Alloc";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Alloc />
    </ThemeProvider>
  );
};

export default App;
