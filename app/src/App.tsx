import { ThemeProvider } from "./features/shared/contexts/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./features/shared/hooks/useQuery";
import { Routers } from "./routes/Routers";
import useMetaHeader from "./features/shared/hooks/useMetaHeader";

function App() {
  useMetaHeader({});
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
