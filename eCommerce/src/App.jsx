import React from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/appRoutes";
import "./App.css";

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
      <AppRoutes />
    </>
  );
}

export default App;
