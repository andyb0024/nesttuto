import { Controller, Get, Req } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  findAll(): string {
    // console.log()
    return 'This action returns all cats';
  }


  @Post()
  create():string{
    return 'This action adds a new cat'
  }
}
