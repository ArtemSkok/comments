import * as Joi from '@hapi/joi';

import { ICreateUserPayload } from '../models';
import { EMAIL_REG_EXP } from './regExps';

export const userSchema = Joi.object<ICreateUserPayload>({
  profileId: Joi.number(),
  email: Joi.string().pattern(EMAIL_REG_EXP).max(50),
  active: Joi.boolean(),
  ban: Joi.boolean(),
});
