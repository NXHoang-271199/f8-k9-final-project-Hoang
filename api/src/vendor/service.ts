import {Vendor} from './entity'
import {Injectable} from "@nestjs/common";
import {CreateDto} from "./dto";
import { Repository } from 'typeorm';

@Injectable()
export class VendorService {

    getList() {
        return 1
    }

    getOne(id: number) {
        return 1
    }

    create(vendor) {
        return 1
    }

    update(id, vendor) {
        return 'update vendor 2';
    }
}