import {vendors} from './entity'
import {Injectable} from "@nestjs/common";
import {CreateDto} from "./dto";

@Injectable()
export class VendorService {
    getList() {
        return vendors
    }

    getOne(id: number) {
        return vendors.find(vendor => vendor.id === id)
    }

    create(vendor) {
        vendors.push({...vendor, id: 2})
        return vendor
    }
}