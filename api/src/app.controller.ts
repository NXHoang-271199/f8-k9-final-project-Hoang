import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';


class UserBody {
  name: string;
  age: number;
  email: string;
}



@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    return this.appService.getList();
  }

  @Post()
  create(@Body() user: UserBody) {
    return this.appService.create(user)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() user: UserBody) {
    console.log(id, user)
  }
}
