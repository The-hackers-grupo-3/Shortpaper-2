/* eslint-disable prettier/prettier */
import { Transform, Type } from "class-transformer";
import { IsString, IsArray, IsOptional, IsNumber, IsPositive} from "class-validator";

export class FilterSpecialty2Dto {

    @IsNumber() @IsPositive()@IsOptional()
    id: number;

    @IsString()@IsOptional()
    name: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true }) @Type(() => String) @Transform(({ value }) => value.split(','))
    specialty?: string;

    @IsOptional()@IsString()
    image:string;
}