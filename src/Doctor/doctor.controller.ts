/* eslint-disable prettier/prettier */
import { Controller, Get} from "@nestjs/common";
import { DoctorService } from "./doctor.service";



@Controller('Doctor')
export class DoctorController{

    constructor(private readonly doctorService: DoctorService){}

    @Get()
    findAll(){
        return this.doctorService.getDoctors();
    }
}