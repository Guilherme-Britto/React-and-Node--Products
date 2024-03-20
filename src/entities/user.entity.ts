import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./schedules.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false, nullable: true })
  admin: boolean;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt?: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: string | Date;

  @DeleteDateColumn({ nullable: true, type: "date" })
  deletedAt?: string | Date | null | undefined;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Schedule[];
}

export { User };
