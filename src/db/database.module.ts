import { Global, Module } from '@nestjs/common';
import * as Knex from 'knex';
import { Model } from 'objection';

import { CommentModel, ProfileModel, UserModel } from './models';

const models = [
  CommentModel,
  ProfileModel,
  UserModel,
];

const modelProviders = models.map(model => {
  return {
    provide: model.name,
    useValue: model
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex({
        client: 'pg',
        connection: {
          host: process.env.PG_HOST,
          user: process.env.PG_USER,
          password: process.env.PG_PASSWORD,
          database: process.env.PG_DATABASE,
        },
        migrations: {
          directory: ['./migration']
        }
      });

      Model.knex(knex);

      return knex;
    }
  }
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers]
})
export class DatabaseModule { }