import * as Knex from 'knex';

import { ETablesNames } from '../src/db';

const tableName = ETablesNames.COMMENTS;

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(tableName, (t: Knex.CreateTableBuilder) => {
    t.increments('id');
    t.integer('userId');
    t.foreign('profileId');
    t.text('comment');
    t.timestamp('createdAt');
    t.timestamp('updatedAt');
    t.timestamp('deletedAt');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(tableName);
}
