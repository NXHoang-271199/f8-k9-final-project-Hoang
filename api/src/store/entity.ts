import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import {User} from '../user/entity'

@Entity()
export class Store extends User {

    @Column({
        nullable: true
    })
    vendorId: number
}
