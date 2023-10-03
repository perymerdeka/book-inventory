import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaServices } from 'src/services/prisma.service';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prismaServices: PrismaServices) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrkey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { username: string }) {
    const user = await this.prismaServices.users.findUnique({
      where: {
        username: payload.username,
      },
    });

    return user;
  }
}
