import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">
          <Skeleton className="h-3 w-14"></Skeleton>
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-14"></Skeleton>
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-14"></Skeleton>
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-14"></Skeleton>
        </TableCell>
        <TableCell className="">
          <Skeleton className="h-3 w-14"></Skeleton>
        </TableCell>
        <TableCell className="flex justify-center items-center text-muted">
          <Ellipsis></Ellipsis>
        </TableCell>
      </TableRow>
    </>
  );
}
