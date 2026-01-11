import  { ReactNode } from "react";
import { LeadsStore } from "@/store/leads.store";
export default function layout({ children }: { children: ReactNode }) {
  return <LeadsStore>{children}</LeadsStore>;
}
