import AppRouter from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import defaultTheme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRouter />;
    </ThemeProvider>
  );
}

export default App;
