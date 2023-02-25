import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('brands')
export class Brand {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 20, nullable: true})
    name: string
}