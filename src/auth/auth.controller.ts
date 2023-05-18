import { AuthService } from './auth.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authSerive: AuthService) {}

  @Get('signup')
  signUp() {
    return 'I AM SIGN UP';
  }

  @Post('signin')
  signIn() {
    return 'I AM SIGN IN';
    // eslint-disable-next-line prettier/prettier
    }


}
