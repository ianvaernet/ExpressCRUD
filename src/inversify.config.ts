import { Container } from 'inversify';
import { DI, IUserRepository, IUserService } from './types';
import { UserRepository } from './repositories';
import { UserService } from './services';

export const DIContainer = new Container();

DIContainer.bind<IUserRepository>(DI.IUserRepository).to(UserRepository);
DIContainer.bind<IUserService>(DI.IUserService).to(UserService);
