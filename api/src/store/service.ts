import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Store} from "./entity";
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {

    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>
    ) {}

    getList() {
        return this.storeRepository.find({
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
}