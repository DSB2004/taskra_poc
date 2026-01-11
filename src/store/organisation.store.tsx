"use client";

import React, { createContext, useContext, useMemo, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import { getOrganisation } from "@/actions/organisation/get.action";
import { Organisation } from "@/types/organisation";
import { User } from "@/types/common";

interface OrganisationStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  data: { organisation: Organisation | null; users: User[] } | undefined;
  error: Error | null;
}

const OrganisationStoreContext =
  createContext<OrganisationStoreInterface | null>(null);

export function OrganisationStore({ children }: { children: React.ReactNode }) {
  const { orgId } = useAuth();

  const { isFetching, isError, isLoading, data, error } = useQuery<
    | {
        organisation: Organisation | null;
        users: User[];
      }
    | undefined
  >({
    queryKey: ["organisation", orgId],
    queryFn: async () => {
      const res = await getOrganisation();
      if (!res || !res.success) {
        toast.error("Error loading restaurants info");
        return res?.data;
      }
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <OrganisationStoreContext.Provider
      value={{ isLoading, isError, isFetching, data, error }}
    >
      {children}
    </OrganisationStoreContext.Provider>
  );
}

export const useOrganisationStore = () => {
  const ctx = useContext(OrganisationStoreContext);
  if (!ctx)
    throw new Error(
      "useOrganisationStore must be used inside OrganisationStore"
    );
  return ctx;
};
