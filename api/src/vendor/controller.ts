import {Body, Get, Param, Post, Controller} from '@nestjs/common';


@Controller('vendor')
export class VendorController {
    @Get("/")
    getVendors(): string {
        return "test"
    }
}