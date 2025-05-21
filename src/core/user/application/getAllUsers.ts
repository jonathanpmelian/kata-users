import UserRepository from './UserRepository';
import User from '../domain/entities/User';

export class GetAllUsersCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.repository.getAllUsers();
  }
}
