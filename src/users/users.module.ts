import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { StoreConfig } from 'src/store/store.config';

@Module({
  providers: [
    UsersService,
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'src',
        path: 'user',
      } as StoreConfig,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
