/* eslint-disable prettier/prettier */
import { Body, Controller, Get } from "@nestjs/common";
import { SpecialtyEntityDTO } from "./DTO/specialty.dto";
import { SpecialtyService } from "./specialty.service";

@Controller('Specialty')
export class SpecialtyController{
    
    constructor(private readonly specialtyService: SpecialtyService){}

    @Get()
    findAll(){
        return this.specialtyService.getSpecialty();
    }

    @Get("Doctors")
    findSpecialty(@Body() filterSpecialty: SpecialtyEntityDTO){
        return this.specialtyService.getDoctors(filterSpecialty);
    }

}
