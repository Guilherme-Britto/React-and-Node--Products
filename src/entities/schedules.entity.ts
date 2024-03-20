import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { RealEstate } from "./realEstate.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "date" })
  hour: Date;

  @ManyToOne(() => User, (user) => user.schedule)
  @JoinColumn()
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  @JoinColumn()
  realEstate: RealEstate;
}

export { Schedule };
