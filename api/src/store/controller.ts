import {Body, Get, Param, Post, Controller, Put, Delete} from '@nestjs/common';
import {StoreService} from "./service";
import {CreateDto} from "./dto";

@Controller('store')
export class StoreController {

    constructor(private readonly storeService: StoreService) {
    }

    @Get()
    getAll() {
        return this.storeService.getList()
    }

    @Post()
    create(@Body() store: CreateDto) {
        return this.storeService.create(store)
    }
}