"use client";

import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface IReudxProviderProps {
  children: ReactNode;
}

export const ReduxProvider: FC<IReudxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
