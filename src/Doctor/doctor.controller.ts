/* eslint-disable prettier/prettier */
import { Body, Controller, Get} from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { FilterDoctorDto } from "./DTO/filterDoctor.dto";



@Controller('Doctor')
export class DoctorController{

    constructor(private readonly doctorService: DoctorService){}

    @Get()
    findAll(){
        return this.doctorService.getDoctors();
    }

    // @Get("Specialty")
    // findSpecialty(@Body() filterSpecialty: FilterDoctorDto){
    //     return this.doctorService.findSpecialtyDoctor(filterSpecialty);
    // }

}