-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "enrollment" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "History_enrollment_key" ON "History"("enrollment");
