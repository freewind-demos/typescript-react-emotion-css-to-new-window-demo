import React, { FC, useMemo, useEffect } from 'react';

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ReactDOM from "react-dom";

export const WindowPortal: FC = ({ children }) => {
  const containerEl = useMemo(() => document.createElement("div"), []);
  const cache = useMemo(() =>
    createCache({ key: "external", container: containerEl }), []);

  useEffect(() => {
    const externalWindow = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    )!;

    externalWindow.document.body.appendChild(containerEl);
    return () => {
      externalWindow.close();
    };
  }, []);

  return ReactDOM.createPortal(
    <CacheProvider value={cache}>{children}</CacheProvider>,
    containerEl
  );
}