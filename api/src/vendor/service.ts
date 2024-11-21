import {Vendor} from './entity'
import {Injectable} from "@nestjs/common";
import {CreateDto} from "./dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VendorService {
    constructor(
        @InjectRepository(Vendor)
        private vendorRepository: Repository<Vendor>
    ) {}

    getList() {
        return this.vendorRepository.find({
            select: [
                'id', 'name'
            ],
            where: {
                active: true
            },
            order: {
                id: 'asc'
            }
        })
    }

    getOne(id: number) {
        return 1
    }

    create(vendor) {
        const vendorEntity = new Vendor()
        vendorEntity.name = 'vendor test thoi'
        vendorEntity.active = true

        return this.vendorRepository.save(vendorEntity)
    }

    update(id, vendor) {
        return 'update vendor 2';
    }
}