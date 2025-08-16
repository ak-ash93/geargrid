import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  try {
    // 1️⃣ See if the user is already in DB
    let loggedInUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    // 2️⃣ If not found, create them
    if (!loggedInUser) {
      loggedInUser = await db.user.create({
        data: {
          clerkUserId: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.emailAddresses[0]?.emailAddress,
          imageUrl: user.imageUrl,
        },
      });
    }

    return loggedInUser;
  } catch (error) {
    console.error("Error checking/creating user:", error);
    throw error;
  }
};
