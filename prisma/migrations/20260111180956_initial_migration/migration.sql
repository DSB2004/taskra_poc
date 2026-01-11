-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('IN_PROGRESS', 'SUCCESSFUL', 'REJECTED', 'WARM');

-- CreateTable
CREATE TABLE "Organisations" (
    "id" TEXT NOT NULL,
    "organisationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organisations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leads" (
    "id" TEXT NOT NULL,
    "organisationId" TEXT NOT NULL,
    "leadOn" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "status" "LeadStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "mobileNo" TEXT,
    "email" TEXT,
    "website" TEXT,
    "name" TEXT,
    "nextFlowup" TEXT,
    "value" TEXT,
    "notes" TEXT,
    "assignedToId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organisations_organisationId_key" ON "Organisations"("organisationId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_userId_key" ON "Users"("userId");

-- AddForeignKey
ALTER TABLE "Leads" ADD CONSTRAINT "Leads_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisations"("organisationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leads" ADD CONSTRAINT "Leads_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
