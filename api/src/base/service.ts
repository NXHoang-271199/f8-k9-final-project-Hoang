import { Repository } from 'typeorm';
import {Base as BaseEntity} from './entity'

export class BaseService {
    constructor(
        protected baseRepository: Repository<BaseEntity>
    ) {}

    selectField() {
        return ['id'];
    }

    getList() {
        return this.baseRepository
            .createQueryBuilder()
            .select('id, name')
            .where({active: true})
            .getRawMany()
    }
}