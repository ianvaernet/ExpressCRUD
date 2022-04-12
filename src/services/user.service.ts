import { User } from '@models';
import { DI, IUserRepository } from '@types';
import { inject } from 'inversify';

export class UserService {
  @inject(DI.IUserRepository) private userRepository: IUserRepository;
}
