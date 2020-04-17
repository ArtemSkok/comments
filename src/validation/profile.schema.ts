import * as Joi from '@hapi/joi';

import { ICreateProfilePayload } from '../models';

export const profileSchema = Joi.object<ICreateProfilePayload>({
  nickName: Joi.string().max(16),
  firstName: Joi.string().max(16),
  lastName: Joi.string().max(16),
});
