/* eslint-disable prettier/prettier */

import { IsNumber, IsPositive, IsOptional, IsString } from "class-validator";

export class FilterDoctorDto{

    @IsNumber() @IsPositive()@IsOptional()
    id_doctor?: number;

    @IsString()@IsOptional()
    name?: string;

    @IsString()@IsOptional()
    apellido?: string;

    @IsOptional()@IsString()
    image?:string;
    
}