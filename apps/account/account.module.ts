import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { config } from 'src/config';
import { SnakeNamingStrategy } from 'libs/db-utils/snakeNamingStrategy';
import { AccountEntity, AccountLogEntity } from './entities';
import { AccountController } from './controllers';
import { AccountService } from './services';

const entities = [AccountEntity, AccountLogEntity];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      namingStrategy: new SnakeNamingStrategy(),
      type: 'postgres',
      url: config.PG_URI + '/account',
      synchronize: true,
      entities,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {
  constructor(private readonly connection: Connection) {}
}
