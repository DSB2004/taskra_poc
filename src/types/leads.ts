import { LeadStatus } from "@/lib/db";
import { User, PaginationType } from "./common";
export interface Lead {
  id: string;
  organisationId: string;
  leadOn: string;
  source: string;
  status: LeadStatus;
  mobileNo: string | null;
  email: string | null;
  website: string | null;
  name: string | null;
  nextFlowup: string | null;
  value: string | null;
  notes: string | null;
  assignedToId: string;
  assignedTo: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface LeadsPagination extends PaginationType {
  leads: Lead[];
}

export interface ListLeadsResponse {
  success: boolean;
  message: string;
  data: LeadsPagination;
}
