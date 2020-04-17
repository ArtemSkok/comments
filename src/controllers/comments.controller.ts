import { Controller, Post, Body, Response } from '@nestjs/common';
import { NotFoundError } from 'objection';
import { ServerResponse } from 'http';

import { UsersService, CommentsService } from '../services';
import { ICreateCommentPayload } from '../models';
import { commentSchema } from '../validation/comment.schema';
import { UserModel } from '../db';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService,
  ) { }

  @Post()
  async createComment(
    @Body() body: ICreateCommentPayload,
    @Response() res: ServerResponse
  ) {
    const validatedBody = commentSchema.validate(body);
    if (validatedBody.error) {
      res.statusCode = 422;
      res.statusMessage = 'Unprocessable Entity';
      return res.end(JSON.stringify({ error: validatedBody.error }));
    }

    let user: UserModel;

    try {
      user = await this.usersService.get(validatedBody.value.userId);
    } catch (error) {
      res.statusCode = error.statusCode;
      res.statusMessage = error.type;
      return { error };
    }

    if (user.profileId != validatedBody.value) {
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      return { error: new NotFoundError('Error: Profile not found') }
    }

    const comment = await this.commentsService.create(body);

    res.end(JSON.stringify(comment));
  }
}
