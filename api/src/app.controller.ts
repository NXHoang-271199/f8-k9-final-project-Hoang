import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';


class UserBody {
  name: string;
  age: number;
  email: string;
}



@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
