import { ETablesNames } from '../tablesNames.enum';
import { BaseModel } from './base.model';

export class ProfileModel extends BaseModel {
  static tableName = ETablesNames.PROFILES;

  nickName: string;
  firstName: string;
  lastName: string;
}