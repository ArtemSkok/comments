import { ICreateProfilePayload } from '../profiles/createProfilePayload.interface';

export interface ICreateUserDTO {
  user: {
    email: string;
    active: boolean;
    ban: boolean;
  };
  profile: ICreateProfilePayload;
}