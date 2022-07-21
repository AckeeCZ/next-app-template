import React from "react";
import { RendererProvider, ThemeProvider } from "react-fela";
import type { IRenderer } from "fela";

import { renderer as fallbackRenderer } from "../services";
import { theme } from "styles/theme";

interface FelaProps {
  children: React.ReactNode;
  renderer: IRenderer;
}

function Fela({ renderer, children }: FelaProps) {
  return (
    <RendererProvider renderer={renderer || fallbackRenderer} rehydrate>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RendererProvider>
  );
}

export default Fela;
