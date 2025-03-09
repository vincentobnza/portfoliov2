import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "../components/ui/sonner";
export const RootLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col space-y-10 m-5 font-primary">
        <Navbar />
        <main className="flex-1">
          <Outlet />
          <Toaster />
        </main>
      </div>
    </ThemeProvider>
  );
};
