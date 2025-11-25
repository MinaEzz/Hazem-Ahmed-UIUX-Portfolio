"use client";
import StoreProvider from "./StoreProvider";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
