import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { products } from "./product.entity"
import { users } from "./user.entity"

@Entity()
export class posts {

    @PrimaryGeneratedColumn({ type:'int' })
    id!: number

    @Column({ length : 1000, nullable: true})
    post_image_url: string

    @Column({ type:'int', nullable: true })
    likes : number

    @Column({length : 1000, nullable: true })
    feed_text : string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at : Date

    @ManyToOne(()=>users,(user)=>user,{ nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: users

    @ManyToOne(()=>products,(product)=>product,{ nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: products

}

// FOREIGN KEY(user_id) REFERENCES users(id),
// FOREIGN KEY(product_id) REFERENCES products(id)