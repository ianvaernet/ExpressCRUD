import { User } from '@models';
import { injectable } from 'inversify';
import { appDataSource } from '../data-source';
import { IUserRepository } from '@types';
import { FindManyOptions, Repository } from 'typeorm';

@injectable()
export class UserRepository implements IUserRepository {
  repo: Repository<User>;

  constructor() {
    this.repo = appDataSource.getRepository(User);
  }

  listUsers({ pageNumber = 1, pageSize }: { filters?: Record<string, any>; pageNumber: number; pageSize?: number }) {
    const options: FindManyOptions = {};
    if (pageSize) {
      options.take = pageSize;
      options.skip = (pageNumber - 1) * pageSize;
    }
    return this.repo.find(options);
  }

  findUserById(id: number) {
    return this.repo.findOneBy({ id });
  }

  save(user: User) {
    return this.repo.save(user);
  }

  delete(user: User) {
    this.repo.remove(user);
  }

  deleteUserById(id: number) {
    this.repo.delete(id);
  }

  deleteMany(ids: number[]) {
    appDataSource.transaction(async (manager) => {
      const repo = manager.getRepository(User);
      await repo.delete(ids);
    });
  }
}
