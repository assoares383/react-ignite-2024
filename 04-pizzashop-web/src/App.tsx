import "./index.css";

import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';

import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
