/*
  Warnings:

  - The `image` column on the `gear_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "gear_items" DROP COLUMN "image",
ADD COLUMN     "image" TEXT[];
