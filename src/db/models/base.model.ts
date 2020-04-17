import { Model } from 'objection';

import { ETablesNames } from '../tablesNames.enum';

export abstract class BaseModel extends Model {
  static tableName: ETablesNames;

  readonly id: number;
}