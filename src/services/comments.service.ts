import { Injectable, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';

import { CommentModel } from '../db';
import { ICreateCommentPayload } from '../models';

@Injectable()
export class CommentsService {

  constructor(
    @Inject('CommentModel') private commentModel: ModelClass<CommentModel>
  ) { }

  async create(input: ICreateCommentPayload): Promise<CommentModel> {
    return await this.commentModel
      .query()
      .insert({
        ...input
      });
  }

}
