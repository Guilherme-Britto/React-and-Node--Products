import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from "typeorm";
import { Schedule } from "./schedules.entity";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false, nullable: true })
  sold: boolean;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    default: 0,
    nullable: true,
  })
  value: string | number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt?: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: string | Date;

  @OneToOne(() => Address, (address) => address.realEstate)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (category) => category.realEstate)
  @JoinColumn()
  category: Category;

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[];
}

export { RealEstate };
