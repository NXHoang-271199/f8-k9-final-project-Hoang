import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Store} from "./entity";
import { Repository } from 'typeorm';
import {Vendor} from "../vendor/entity";
import {BaseService} from "../base/service";

@Injectable()
export class StoreService extends BaseService {

    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>
    ) {
        super(storeRepository)
    }

    handleSelect() {
        return this.storeRepository
            .createQueryBuilder('store')
            .select([
                'store.id as id',
                'store.name as name',
                "json_build_object('id', vendor.id, 'name', vendor.name) as vendor"
            ])
            .innerJoin(Vendor, 'vendor', 'vendor.id = store.vendorId')
    }
}