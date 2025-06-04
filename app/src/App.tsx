import { ThemeProvider } from "./features/shared/contexts/theme-provider";
import { Routers } from "./routes/Routers";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routers />
    </ThemeProvider>
  );
}

export default App;
