import UserRepository from '../application/UserRepository';
import User from '../domain/entities/User';
import { Email } from '../domain/valueObjects';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async addUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: Email): Promise<User | null> {
    return this.users.find((u) => u.getEmail().equals(email)) || null;
  }
}
