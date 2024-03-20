import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { TScheduleRequest } from "../../interfaces/schedules.interfaces";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const createScheduleService = async (
  scheduleData: TScheduleRequest,
  realEstateId: number,
  userId: number
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const date = new Date(
    scheduleData.date.replace("/", "-").replace("/", "-") +
      "T" +
      scheduleData.hour +
      ":00"
  );
  if (date.getHours() > 18 || date.getHours() < 8) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  if (date.getDay() == 6 || date.getDay() == 0) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const userBooked = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.hour = :hour", { hour: scheduleData.hour })
    .andWhere("schedule.date = :date", { date: scheduleData.date })
    .andWhere("schedule.userId = :userId", { userId: userId })
    .getOne();

  if (userBooked) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const realEstateBooked = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.hour = :hour", { hour: scheduleData.hour })
    .andWhere("schedule.date = :date", { date: scheduleData.date })
    .andWhere("schedule.realEstateId = :realEstateId", {
      realEstateId: realEstateId,
    })
    .getOne();

  if (realEstateBooked) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const user: User | null = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
    id: realEstateId,
  });
  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const schedule: Schedule = scheduleRepository.create({
    ...scheduleData,
    realEstate: realEstate,
    user: user,
  });

  await scheduleRepository.save(schedule);

  return;
};
