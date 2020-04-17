import { ETablesNames } from '../tablesNames.enum';
import { BaseModel } from './base.model';

export class CommentModel extends BaseModel {
  static tableName = ETablesNames.COMMENTS;

  userId: number;
  profileId: number;
  comment: string;
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