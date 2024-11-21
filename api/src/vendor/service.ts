import {Vendor} from './entity'
import {Injectable} from "@nestjs/common";
import {CreateDto} from "./dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {BaseService} from "../base/service";

@Injectable()
export class VendorService extends BaseService{
    constructor(
        @InjectRepository(Vendor)
        private vendorRepository: Repository<Vendor>
    ) {
        super(vendorRepository)
    }

    handleSelect() {
        return this.vendorRepository
            .createQueryBuilder('vendor')
            .select([
                'vendor.id as id',
                'vendor.name as name',
                'vendor.email as email',
            ])

    }

    getOne(id: number) {
        return this.getList({id: id})
    }

    async update(id, vendor) {
        const vendorEntity = await this.vendorRepository.getId(id)
        vendorEntity.name = 'vendor test thoi'
        vendorEntity.active = true

        return this.vendorRepository.save(vendorEntity)
    }
}