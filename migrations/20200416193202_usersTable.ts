import * as Knex from 'knex';

import { ETablesNames } from '../src/db';

const tableName = ETablesNames.USERS;

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(tableName, (t: Knex.CreateTableBuilder) => {
    t.increments('id');
    t.integer('profileId');
    t.string('email', 50);
    t.boolean('active');
    t.boolean('ban');
    t.timestamp('createdAt');
    t.timestamp('updatedAt');
    t.timestamp('deletedAt');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(tableName);
}
