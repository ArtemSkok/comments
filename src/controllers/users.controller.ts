import { Controller, Post, Body, Response } from '@nestjs/common';
import { ServerResponse } from 'http';

import { ProfilesService, UsersService } from '../services';
import { profileSchema, userSchema } from '../validation';
import { ICreateUserDTO } from '../models';

@Controller('users')
export class UsersController {
  constructor(
    private readonly profilesService: ProfilesService,
    private readonly usersService: UsersService,
  ) { }

  @Post()
  async createUserWithProfile(
    @Body() body: ICreateUserDTO,
    @Response() res: ServerResponse
  ) {
    const validatedUser = userSchema.validate(body.user);
    const validatedProfile = profileSchema.validate(body.profile);

    const error = validatedUser.error || validatedProfile.error;
    if (error) {
      res.statusCode = 422;
      res.statusMessage = 'Unprocessable Entity';
      res.end(JSON.stringify({ error }));
    }

    const profile = await this.profilesService.create(validatedProfile.value);

    const user = await this.usersService.create({
      ...validatedUser.value,
      profileId: profile.id
    });

    res.end(JSON.stringify({ profile, user }));
  }

}
