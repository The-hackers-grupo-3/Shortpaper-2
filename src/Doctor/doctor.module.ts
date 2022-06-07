/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorController } from "./doctor.controller";
import { DoctorService } from "./doctor.service";
import { DoctorEntity } from "./Entity/doctor.entity";

@Module({
    imports:[TypeOrmModule.forFeature([DoctorEntity])],
    providers:[DoctorService],
    controllers: [DoctorController],
})
export class DoctorModule{}