import { Module } from '@nestjs/common';
import {VendorController} from './controller'
import {VendorService} from "./service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entity'

@Module({
    imports: [TypeOrmModule.forFeature([Vendor])],
    controllers: [VendorController],
    providers: [VendorService]
})
export class VendorModule {}
