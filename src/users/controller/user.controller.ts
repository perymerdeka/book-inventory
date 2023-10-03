import { Controller, Get, Req, Res } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Request, Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.userService.getAllUsers();
      return response.status(200).json({
        status: 'ok',
        message: 'Sucessfully Fetch Data',
        result: result,
      });
    } catch (err: any) {
      response.status(500).json({
        status: 'OK',
        message: 'Internal Server Error',
      });
    }
  }
}
