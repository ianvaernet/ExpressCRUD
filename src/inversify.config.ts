import { Container } from 'inversify';
import { DI, IUserRepository } from '@types';
import { UserRepository } from '@repositories';

export const DIContainer = new Container();

DIContainer.bind<IUserRepository>(DI.IUserRepository).to(UserRepository);
