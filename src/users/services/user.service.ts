import { PrismaServices } from 'src/services/prisma.service';
import { UsersModel } from '../models/users.model';

export class UserService {
  constructor(private prisma: PrismaServices) {}

  async getAllUsers(): Promise<UsersModel[]> {
    return this.prisma.users.findMany();
  }
}
