import { ETablesNames } from '../tablesNames.enum';
import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  static tableName = ETablesNames.USERS;

  profileId: number;
  email: string;
  active: boolean;
  ban: boolean;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }
  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
  $beforeDelete() {
    this.deletedAt = new Date().toISOString();
  }
}
