import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import {User} from '../user/entity'

@Entity()
export class Vendor extends User {
}
