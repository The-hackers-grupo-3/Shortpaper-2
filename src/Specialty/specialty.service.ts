/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SpecialtyEntityDTO } from "./DTO/specialty.dto";
import { SpecialtyEntity } from "./Entity/specialty.entity";

@Injectable()
export class SpecialtyService{
    constructor(
        @InjectRepository(SpecialtyEntity)
        private readonly specialtyRepository: Repository<SpecialtyEntity>,
    ) {}

    async getSpecialty(): Promise<SpecialtyEntity[]>{
        return await this.specialtyRepository.find();
    }

    async getDoctors(filters: SpecialtyEntityDTO):Promise<SpecialtyEntity[]>{
        return await this.specialtyRepository.find({relations:['doctor'], where:filters});
      }
}