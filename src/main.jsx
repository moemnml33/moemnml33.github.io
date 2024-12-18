import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider className="w-full">
      <main className="light text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
