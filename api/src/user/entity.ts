import {Base} from '../base/entity'
import {Column} from "typeorm";

export abstract class User extends Base {

    @Column({
        nullable: true
    })
    name: string

    @Column({
        nullable: true
    })
    location: string

    @Column({
        nullable: true
    })
    email: string
}
