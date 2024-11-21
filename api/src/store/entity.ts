import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import {User} from '../user/entity'
import {Vendor} from '../vendor/entity'

@Entity()
export class Store extends User {

    @Column({
        nullable: true,
        name: 'vendor_id'
    })
    vendorId: number
    // @ManyToOne(() => Vendor, (vendor) => vendor.stores)
    // vendor: Vendor
}
