import { useEffect } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    const blockContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const blockImageDrag = (event: DragEvent) => {
      if (event.target instanceof HTMLImageElement) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockImageDrag);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockImageDrag);
    };
  }, []);

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}