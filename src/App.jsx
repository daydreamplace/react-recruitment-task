import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./layout/Header";
import Alloc from "./pages/Alloc";
import Any from "./pages/Any";
import Footer from "./layout/Footer";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Alloc />} />
        <Route path="/*" element={<Any />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
