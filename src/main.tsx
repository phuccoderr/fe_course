import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { queryClient } from "@/configs/tanstack-key.config";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router.route";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
);
