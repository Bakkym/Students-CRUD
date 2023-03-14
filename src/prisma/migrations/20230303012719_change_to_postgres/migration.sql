-- CreateTable
CREATE TABLE "Students" (
    "cedula" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "career" TEXT NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("cedula")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_email_key" ON "Students"("email");
