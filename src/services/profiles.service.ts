import { Injectable, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';

import { ProfileModel } from '../db';
import { ICreateProfilePayload } from '../models';

@Injectable()
export class ProfilesService {

  constructor(
    @Inject('ProfileModel') private profileModel: ModelClass<ProfileModel>
  ) { }

  async create(input: ICreateProfilePayload): Promise<ProfileModel> {
    return await this.profileModel
      .query()
      .insert({
        ...input
      });
  }

}
