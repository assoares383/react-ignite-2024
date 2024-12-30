import "./index.css";

import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';

import { ThemeProvider } from "./components/theme/theme-provider";

import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster richColors />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </HelmetProvider>
  );
}
