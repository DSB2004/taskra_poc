"use client";

import React, { createContext, useContext, useMemo, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { LeadsPagination } from "@/types/leads";
import { useSearchParams } from "next/navigation";
import { listLeads } from "@/actions/leads/list.action";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";

interface LeadsStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  data: LeadsPagination | undefined;
  error: Error | null;
}

const LeadsStoreContext = createContext<LeadsStoreInterface | null>(null);

function LeadsStoreContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const { orgId } = useAuth();
  const filter = useMemo(() => {
    return {
      search: searchParams.get("search") || undefined,
      page: Number(searchParams.get("page") || "1"),
      limit: Number(searchParams.get("limit") || "10"),
      showArchived: searchParams.get("showArchived") === "true" || false,
      orgId,
    };
  }, [searchParams, orgId]);

  const { isFetching, isError, isLoading, data, error } = useQuery<
    LeadsPagination | undefined
  >({
    queryKey: ["leads", filter],
    queryFn: async () => {
      const res = await listLeads(filter);
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
    <LeadsStoreContext.Provider
      value={{ isLoading, isError, isFetching, data, error }}
    >
      {children}
    </LeadsStoreContext.Provider>
  );
}

export const LeadsStore = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<></>}>
      <LeadsStoreContent>{children}</LeadsStoreContent>
    </Suspense>
  );
};

export const useLeadsStore = () => {
  const ctx = useContext(LeadsStoreContext);
  if (!ctx) throw new Error("useLeadsStore must be used inside LeadsStore");
  return ctx;
};
