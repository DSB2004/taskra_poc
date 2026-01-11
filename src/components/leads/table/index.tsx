"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import { Pagination } from "@/components/common/pagination";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLeadsStore } from "@/store/leads.store";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

// import EditDish from "../edit";
import Loading from "./loading";
// import { ToggleAvailability } from "../availability";
// import { DeleteDish } from "../delete";
import Image from "next/image";

//  id: string;
//   organisationId: string;
//   leadOn: string;
//   source: string;
//   status: LeadStatus;
//   mobileNo: string | null;
//   email: string | null;
//   website: string | null;
//   name: string | null;
//   nextFlowup: string | null;
//   value: string | null;
//   notes: string | null;
//   assignedToId: string;
//   assignedTo: User;
//   createdAt: Date;
//   updatedAt: Date;

export default function MenuTable() {
  const { data, isLoading, isFetching } = useLeadsStore();
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {/* info regarding lead */}
            <TableHead>Lead</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Next Follow Up</TableHead>

            {/* person info to contact  */}
            <TableHead>Name</TableHead>
            <TableHead>Mobile No</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Website</TableHead>

            {/* extra */}
            <TableHead>Notes</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* {isLoading || isFetching || !data || !data.dishes ? (
            <>
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
            <>
              {data.dishes.map((dish) => (
                <TableRow key={dish.id}>
                  <TableCell className="flex gap-2 items-center">
                    <Image
                      src={
                        dish.previewImg ??
                        "https://imgs.search.brave.com/VHMy7JN3e4-Z2u6Yxs5j_k_QvnzSb6oCOCz2V8PTc-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI0LzEwLzE0/L2I0Njc2ZGQ4LTZm/ZWYtNGRmOS05YTRj/LTVkMWM3MjE1NWI0/MC5qcGc"
                      }
                      alt={dish.name}
                      width={100}
                      height={109}
                      className="w-10 h-10 rounded-full"
                    ></Image>
                    <span className="font-medium"></span>
                    {dish.name}
                  </TableCell>

                  <TableCell>
                    {dish.category === "veg" ? (
                      <Badge>Veg</Badge>
                    ) : (
                      <Badge variant="destructive">Non-Veg</Badge>
                    )}
                  </TableCell>
                  <TableCell>{dish.foodType}</TableCell>

                  <TableCell>{dish.price}</TableCell>

                  <TableCell>
                    {dish.isAvailable ? (
                      <Badge>Available</Badge>
                    ) : (
                      <Badge variant="destructive">Not Available</Badge>
                    )}
                  </TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="cursor-pointer">
                        <Ellipsis />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="end"
                        className="w-40 space-y-1"
                      >
                      
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </>
          )} */}
        </TableBody>
      </Table>

      {!isLoading && !isFetching && data && <Pagination {...data} />}
    </>
  );
}
