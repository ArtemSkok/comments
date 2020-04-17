import { Module } from '@nestjs/common';

import { DatabaseModule } from './db';
import { CommentsController, UsersController } from './controllers';
import { ProfilesService, UsersService, CommentsService } from './services';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    CommentsController,
    UsersController
  ],
  providers: [
    ProfilesService,
    UsersService,
    CommentsService
  ],
})
export class AppModule { }
