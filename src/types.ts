import { User } from 'models';
import { DeleteResult } from 'typeorm';

export const DI = {
  IUserRepository: Symbol.for('IUserRepository'),
  IUserService: Symbol.for('IUserService'),
};

export interface IUserRepository {
  listUsers({ pageNumber, pageSize }: ListUserParams): Promise<User[]>;
  findUserById(id: number): Promise<User | null>;
  deleteUserById(id: number): Promise<DeleteResult>;
  save(user: User): Promise<User>;
}

export interface IUserService {
  listUsers({ pageNumber, pageSize }: ListUserParams): Promise<User[]>;
  createUser(createUserInput: any): Promise<User>;
  getUser(id: number): Promise<User>;
  updateUser(id: number, updateUserInput: any): Promise<User>;
  deleteUser(id: number): Promise<void>;
}

export type UserDTO = {
  id: number;
  firstName: string;
  lastName: string;
};

export type ListUserParams = { filters?: Record<string, unknown>; pageNumber?: number; pageSize?: number };

export interface Mapper<MODEL, DTO> {
  toDTO(model: MODEL): DTO;
}
