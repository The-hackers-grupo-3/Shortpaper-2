# Segundo Short-paper

<p align="center">

  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>

</p>


## Miembros 🦸‍♂️

- Arturo Lecuona [@ArtuKILL](https://github.com/ArtuKILL)

- Rabindra Harichand [@RabindraHarichand](https://github.com/RabindraHarichand)

- Manuel De Olival [@madomss](https://github.com/madomss)

- Jesús Soarez [@jesussoares](https://github.com/jesussoares)

## Commits más relevantes


| Miembro          | Tarea                            | Commit significativo                                                                                                                                | Commit HASH                                  |
| ---------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Manuel De Olival | Servicio de busqueda de doctores | [Servicio de buscar doctores por especialidad](https://github.com/The-hackers-grupo-3/shortpaper-2/commit/c493ca06a506e7e407dec0da2dacfddca49c4bea) | `<c493ca06a506e7e407dec0da2dacfddca49c4bea>` | 


## Iniciar el proyecto

Se debe tener [NodeJS](https://nodejs.org/es/) y [Git](https://git-scm.com/downloads).

### Clonar el repo

**HTTPS:**

```bash
git clone https://github.com/The-hackers-grupo-3/shortpaper-2.git
```

**SSH:**

```bash
git clone git@github.com:The-hackers-grupo-3/shortpaper-2.git
```

### Instalar herramientas

- Una vez dentro de la carpeta ejecutar `npm install`

- Luego ejecutar `npm run start:dev` para verificar que todo este bien.

**Output:**

```bash
$ npm run start:dev

> shortpaper2@0.0.1 start:dev
> nest start --watch

[6:23:52 PM] Starting compilation in watch mode...

[6:24:02 PM] Found 0 errors. Watching for file changes.

[Nest] 19304  - 06/20/2022, 6:24:43 PM     LOG [NestFactory] Starting Nest application...
[Nest] 19304  - 06/20/2022, 6:24:44 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +890ms
[Nest] 19304  - 06/20/2022, 6:24:44 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +1ms
[Nest] 19304  - 06/20/2022, 6:24:44 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 19304  - 06/20/2022, 6:24:44 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +1402ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [InstanceLoader] DoctorModule dependencies initialized +1ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [InstanceLoader] SpecialtyModule dependencies initialized +8ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [RoutesResolver] AppController {/}: +556ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [RouterExplorer] Mapped {/, GET} route +7ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [RoutesResolver] DoctorController {/Doctor}: +1ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [RouterExplorer] Mapped {/Doctor, GET} route +2ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [RoutesResolver] SpecialtyController {/Specialty}: +1ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [RouterExplorer] Mapped {/Specialty, GET} route +1ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [RouterExplorer] Mapped {/Specialty/Doctors, GET} route +2ms
[Nest] 19304  - 06/20/2022, 6:24:46 PM     LOG [NestApplication] Nest application successfully started +5ms

```
