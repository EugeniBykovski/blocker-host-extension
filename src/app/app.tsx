import { HomePage } from "@/pages/home";
import { AppProvider } from "./app-providers";

export function App() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}
