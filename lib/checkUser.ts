import { currentUser } from '@clerk/nextjs/server';
import { db } from './db';

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const dbUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (dbUser) {
    return dbUser;
  }

  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0]?.emailAddress,
    },
  });

  if (!newUser) {
    return null;
  }

  return newUser;
};
