/*
  Warnings:

  - The `imageUrl` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `duration` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "categories" TEXT[],
ADD COLUMN     "duration" INTEGER NOT NULL,
DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];
