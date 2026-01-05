"use client";

import { ReactNode } from "react";
import { ClerkProvider as ClerkProviderWrapper } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
export function ClerkProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProviderWrapper
      appearance={{
        theme: shadcn,
      }}
    >
      {children}
    </ClerkProviderWrapper>
  );
}
