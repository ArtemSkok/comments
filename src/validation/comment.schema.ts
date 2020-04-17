import * as Joi from '@hapi/joi';

import { CommentModel } from '../db';

export const commentSchema = Joi.object<CommentModel>({
  profileId: Joi.number(),
  userId: Joi.number(),
  comment: Joi.string()
});
