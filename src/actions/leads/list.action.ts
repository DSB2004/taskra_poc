"use server";

import { db } from "@/lib/db";
import { ListLeadsResponse } from "@/types/leads";
import { auth } from "@clerk/nextjs/server";

export const listLeads = async (data: {
  search?: string;
  page?: number;
  limit?: number;
  showArchived?: boolean;
}): Promise<ListLeadsResponse | undefined> => {
  const page = data.page ? Number(data.page) : 1;
  const limit = data.limit ? Number(data.limit) : 10;
  const showArchived = data.showArchived || false;
  const skip = (page - 1) * limit;

  try {
    const { orgId } = await auth();

    if (!orgId) {
      await auth.protect();
      return;
    }

    const where: any = {
      organisationId: orgId,
      isDeleted: false,
      isArchived:showArchived,
      ...(data.search && {
        OR: [
          { name: { contains: data.search, mode: "insensitive" } },
          { email: { contains: data.search, mode: "insensitive" } },
        ],
      }),
    };

    const [total, leads] = await Promise.all([
      db.leads.count({ where }),
      db.leads.findMany({
        where,
        take: limit,
        skip,
        include: {
          assignedTo: {
            select: {
              name: true,
              email: true,
              avatar: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);
    
    return {
      success: true,
      message: "Leads fetched",
      data: {
        page,
        limit,
        total,
        totalPages,
        next: page < totalPages ? page + 1 : null,
        prev: page > 1 ? page - 1 : null,
        leads,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "Failed to fetch leads for organisation",
      data: {
        page,
        limit,
        total: 0,
        totalPages: 0,
        next: null,
        prev: null,
        leads: [],
      },
    };
  }
};
