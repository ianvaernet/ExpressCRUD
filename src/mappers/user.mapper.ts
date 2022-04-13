import { User } from '../models';
import { Mapper, UserDTO } from '../types';

export const UserMapper: Mapper<User, UserDTO> = class UserMapper {
  static toDTO(model: User): UserDTO {
    return {
      id: model.id,
      firstName: model.firstName,
      lastName: model.lastName,
    };
  }
};
