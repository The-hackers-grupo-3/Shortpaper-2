/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './Doctor/doctor.module';
import { SpecialtyModule } from './Specialty/specialty.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ssl: {
        rejectUnauthorized: false,
      },
      type: 'postgres',
      host: 'ec2-3-211-221-185.compute-1.amazonaws.com',
      port: 5432,
      username: 'tbxritloxzdmqs',
      password:
        'dbfdca9fd8fbaccada1c420138701e8310b82972c1381dd0b9cab0b358bfb2b8',
      database: 'd1b5toucce4tie',
      autoLoadEntities: true,
      synchronize: false,
    }),
    DoctorModule,
    SpecialtyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
