import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { BaseEntity } from "./commom.entity"

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 200 , nullable: false})    
    name: string

    @Column({ length: 200 , nullable: false, unique: true})
    email: string

    @Column()
    hash_password: string

}