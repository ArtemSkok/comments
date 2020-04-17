import { ProfileModel, UserModel } from '../../db';

export interface ICreateUserResponse {
  user: UserModel;
  profile: ProfileModel;
}
