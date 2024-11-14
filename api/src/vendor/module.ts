import { Module } from '@nestjs/common';
import {VendorController} from './controller'

@Module({
    controllers: [VendorController],
})
export class VendorModule {}
