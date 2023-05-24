import { Cat } from './../model/cat.model';
import { CatService } from './cat.service';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';

@Controller('cat')
export class CatController {
  constructor(private catService:CatService){

  }
  @Get()
  getAllCat():Cat[] {
    // console.log()
    return this.catService.getAllCat();
   
  }


  // @Post()
  // create(@Body() cat:Cat):any{
  //   return this.catService.createCat(cat)
  // }

  @Post('/create')
  createCat(@Body() cat:Cat){
    return this.catService.createCat(cat)

  }
}
