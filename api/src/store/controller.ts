import {Body, Get, Param, Post, Controller, Put, Delete} from '@nestjs/common';
import {StoreService} from "./service";

@Controller('store')
export class StoreController {

    constructor(private readonly storeService: StoreService) {
    }

    @Get()
    getAll() {
        return this.storeService.getList()
    }
}