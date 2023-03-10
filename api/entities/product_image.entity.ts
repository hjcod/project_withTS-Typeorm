import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { products } from "./product.entity"

@Entity()
export class product_images {

    @PrimaryGeneratedColumn({ type:'int' })
    id!: number

    @Column({ length : 1000, nullable: true })
    image_url: string

    @ManyToOne(()=>products, (product)=>product, {nullable: false})
    @JoinColumn({name : 'product_id'})
    product_img : product_images
}