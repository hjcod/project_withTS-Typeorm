
import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class statuses {


    @PrimaryGeneratedColumn()
    id!: number


    @Column({nullable: true, length : 100})
    name?: string
}