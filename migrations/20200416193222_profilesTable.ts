import * as Knex from 'knex';

import { ETablesNames } from '../src/db';

const tableName = ETablesNames.PROFILES;

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(tableName, (t: Knex.CreateTableBuilder) => {
    t.increments('id');
    t.string('nickName', 16);
    t.string('firstName', 16);
    t.string('lastName', 16);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(tableName);
}
