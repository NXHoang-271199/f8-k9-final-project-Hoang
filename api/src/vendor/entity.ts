import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    id: number

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

    @Column({
        name: 'created_at',
        nullable: true
    })
    createdAt: Date

    @Column({
        name: 'created_by',
        nullable: true
    })
    createdBy: number

    @Column({
        name: 'modified_at',
        nullable: true
    })
    modifiedAt: Date

    @Column({
        name: 'modified_by',
        nullable: true
    })
    modifiedBy: number

    @Column({
        name: 'deleted_at',
        nullable: true
    })
    deletedAt: Date

    @Column({
        name: 'deleted_by',
        nullable: true
    })
    deletedBy: number

    @Column()
    active: boolean
}

// export const vendors = [
//     {
//         id: 1,
//         name: 'Vendor 1',
//         location: 'Location 1',
//     }
// ]