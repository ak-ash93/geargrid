import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const getAdmin = async () => {
  const { userId } = await auth();
  console.log("Clerk UserId:", userId);

  if (!userId) return { authorized: false, reason: "No Clerk userId" };

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  console.log("Prisma User:", user);

  if (!user || user.role !== "ADMIN") {
    return { authorized: false, reason: "Not Admin" };
  }

  return { authorized: true, user };
};
