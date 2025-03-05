-- DropForeignKey
ALTER TABLE "chats" DROP CONSTRAINT "chats_roomId_fkey";

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
