export interface User {
  email: string | null;
  name: string | null;
  avatar: string | null;
}


export interface PaginationType {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  next: number | null;
  prev: number | null;
}