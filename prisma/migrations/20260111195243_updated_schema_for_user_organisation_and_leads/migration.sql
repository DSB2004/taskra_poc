/*
  Warnings:

  - Added the required column `isArchived` to the `Leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeleted` to the `Leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leads" ADD COLUMN     "isArchived" BOOLEAN NOT NULL,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Organisations" ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "name" TEXT;

-- CreateTable
CREATE TABLE "OrganisationUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "organisationId" TEXT NOT NULL,

    CONSTRAINT "OrganisationUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrganisationUser_userId_organisationId_key" ON "OrganisationUser"("userId", "organisationId");
