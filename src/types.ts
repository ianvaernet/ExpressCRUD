import { User } from '@models';

export const DI = {
  IUserRepository: Symbol.for('IUserRepository'),
};

export interface IUserRepository {
  findUserById: (id: number) => Promise<User | null>;
}
