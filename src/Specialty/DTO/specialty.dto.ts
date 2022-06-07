/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class SpecialtyEntityDTO{

    @IsNumber() @IsPositive()@IsOptional()
    id_specialty?: number;

    @IsString()@IsOptional()
    name?: string;

}