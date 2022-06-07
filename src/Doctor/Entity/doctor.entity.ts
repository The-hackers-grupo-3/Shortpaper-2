/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { SpecialtyEntity } from 'src/Specialty/Entity/specialty.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Doctor')

export class DoctorEntity{
    @PrimaryGeneratedColumn()
    id_doctor: number;

    @Column()
    name:string;

    @Column()
    apellido: string;

    @Column()
    image:string;

    @ManyToMany( () => SpecialtyEntity, specialty=>specialty.doctor)
    @JoinTable({
        name: 'D_S',
        joinColumn:{
            name:'fk_id_doctor'
        },
        inverseJoinColumn:{
            name: 'fk_id_specialty'
        }
    })
    specialty:SpecialtyEntity[];

}