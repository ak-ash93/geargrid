-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."CarStatus" AS ENUM ('Available', 'Sold', 'UNAVAILABLE');

-- CreateEnum
CREATE TYPE "public"."BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "public"."UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cars" (
    "id" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "mileage" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "bodyType" TEXT NOT NULL,
    "seats" INTEGER,
    "description" TEXT NOT NULL,
    "status" "public"."CarStatus" NOT NULL DEFAULT 'Available',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DealershipInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DealershipInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserSavedCar" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSavedCar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestDrive" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "scheduledOn" DATE NOT NULL,
    "status" "public"."BookingStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "TestDrive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "public"."User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone");

-- CreateIndex
CREATE INDEX "Cars_make_model_idx" ON "public"."Cars"("make", "model");

-- CreateIndex
CREATE INDEX "Cars_year_idx" ON "public"."Cars"("year");

-- CreateIndex
CREATE INDEX "Cars_price_idx" ON "public"."Cars"("price");

-- CreateIndex
CREATE INDEX "Cars_status_idx" ON "public"."Cars"("status");

-- CreateIndex
CREATE INDEX "Cars_fuelType_idx" ON "public"."Cars"("fuelType");

-- CreateIndex
CREATE INDEX "Cars_featured_idx" ON "public"."Cars"("featured");

-- CreateIndex
CREATE INDEX "UserSavedCar_userId_idx" ON "public"."UserSavedCar"("userId");

-- CreateIndex
CREATE INDEX "UserSavedCar_carId_idx" ON "public"."UserSavedCar"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSavedCar_userId_carId_key" ON "public"."UserSavedCar"("userId", "carId");

-- CreateIndex
CREATE INDEX "TestDrive_userId_idx" ON "public"."TestDrive"("userId");

-- CreateIndex
CREATE INDEX "TestDrive_carId_idx" ON "public"."TestDrive"("carId");

-- CreateIndex
CREATE INDEX "TestDrive_scheduledOn_idx" ON "public"."TestDrive"("scheduledOn");

-- CreateIndex
CREATE INDEX "TestDrive_status_idx" ON "public"."TestDrive"("status");

-- AddForeignKey
ALTER TABLE "public"."UserSavedCar" ADD CONSTRAINT "UserSavedCar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserSavedCar" ADD CONSTRAINT "UserSavedCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "public"."Cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestDrive" ADD CONSTRAINT "TestDrive_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestDrive" ADD CONSTRAINT "TestDrive_carId_fkey" FOREIGN KEY ("carId") REFERENCES "public"."Cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
