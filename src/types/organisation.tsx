import { User } from "./common";
export interface Organisation {
  organisationId: string;
  name: string | null;
}

export interface GetOrganisation {
  success: boolean;
  message: string;
  data: {
    organisation: Organisation | null;
    users: User[];
  };
}
