import { TypeOrmModuleOptions } from "@nestjs/typeorm";

require('dotenv').config()

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'NistagramPostServiceDb',
    entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
    synchronize: true,
}
