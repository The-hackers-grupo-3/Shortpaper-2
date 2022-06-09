/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { FilterDoctorDto } from './DTO/filterDoctor.dto';
import { DoctorEntity } from './Entity/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(DoctorEntity)
    private readonly doctorRepository: Repository<DoctorEntity>,
  ) {}

  async getDoctors(): Promise<DoctorEntity[]>{
      return await this.doctorRepository.find({relations:['specialty']});
  }

  // async findSpecialtyDoctor(filters: FilterDoctorDto):Promise<DoctorEntity[]>{
  //   return await this.doctorRepository.find({relations:['specialty'], where:filters});
  // }

}
