"use server";

import { db } from "@/lib/db";
import { GetOrganisation } from "@/types/organisation";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const getOrganisation = async (): Promise<
  GetOrganisation | undefined
> => {
  try {
    const { orgId } = await auth();

    if (!orgId) {
      await auth.protect();
      return;
    }

    // 1️⃣ Try DB first
    const organisation = await db.organisations.findUnique({
      where: { organisationId: orgId },
    });

    if (organisation) {
      const users = await db.users.findMany({
        select: {
          name: true,
          email: true,
          avatar: true,
        },
        where: {
          userId: {
            in: (
              await db.organisationUser.findMany({
                where: { organisationId: orgId },
                select: { userId: true },
              })
            ).map((ele) => ele.userId),
          },
        },
      });

      return {
        success: true,
        message: "Organisation detail",
        data: { organisation, users },
      };
    }
    const client = await clerkClient();

    const clerkOrg = await client.organizations.getOrganization({
      organizationId: orgId,
    });

    const memberships =
      await client.organizations.getOrganizationMembershipList({
        organizationId: orgId,
      });

    const users = memberships.data.map((m) => ({
      name: m.publicUserData?.firstName ?? null,
      email: m.publicUserData?.identifier ?? null,
      avatar: m.publicUserData?.imageUrl ?? null,
    }));

    return {
      success: true,
      message: "Organisation detail (from Clerk)",
      data: {
        organisation: {
          organisationId: clerkOrg.id,
          name: clerkOrg.name,
        },
        users,
      },
    };
  } catch (err) {
    console.error("getOrganisation error:", err);
    return {
      success: false,
      message: "Organisation not found",
      data: { organisation: null, users: [] },
    };
  }
};
