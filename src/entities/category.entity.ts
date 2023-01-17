import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Transaction } from "./transaction.entity";
import { User } from "./user.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 20 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (users) => users.categories)
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.category, {
    onDelete: "SET NULL",
  })
  transaction: Transaction;
}

export { Category };
