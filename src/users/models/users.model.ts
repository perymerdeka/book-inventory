import { Prisma } from '@prisma/client';

export class UsersModel implements Prisma.UsersCreateInput {
  name: string;
  username: string;
  password: string;
  email: string;
}
