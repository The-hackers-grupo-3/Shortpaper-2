/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { DoctorEntity } from 'src/Doctor/Entity/doctor.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Specialty')

export class SpecialtyEntity{
    @PrimaryGeneratedColumn()
    id_specialty: number;

    @Column()
    name:string;

    @ManyToMany( () => DoctorEntity, doctor=>doctor.specialty)
    doctor:DoctorEntity[];
}