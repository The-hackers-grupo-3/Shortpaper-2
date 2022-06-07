/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SpecialtyEntity } from "./Entity/specialty.entity";
import { SpecialtyController } from "./specialty.controller";
import { SpecialtyService } from "./specialty.service";

@Module({
    imports:[TypeOrmModule.forFeature([SpecialtyEntity])],
    providers:[SpecialtyService],
    controllers: [SpecialtyController],
})
export class SpecialtyModule{}