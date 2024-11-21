import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm"
import {User} from '../user/entity'
import {Store} from '../store/entity'

@Entity()
export class Vendor extends User {

    // @OneToMany(() => Store, (store) => store.vendor)
    // stores: Store[]
}
