import { Injectable, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';

import { UserModel } from '../db';
import { ICreateUserPayload } from '../models';

@Injectable()
export class UsersService {

  constructor(
    @Inject('UserModel') private userModel: ModelClass<UserModel>
  ) { }

  async create(input: ICreateUserPayload): Promise<UserModel> {
    return await this.userModel
      .query()
      .insert({
        ...input
      });
  }

  async get(id: number): Promise<UserModel> {
    return this.userModel
      .query()
      .findById(id);
  }

}
