import { AppProvider } from "./app-providers";
import { NotAuthPage } from "@/pages/not-auth.page";

export function App() {
  return (
    <AppProvider>
      <NotAuthPage />
    </AppProvider>
  );
}
