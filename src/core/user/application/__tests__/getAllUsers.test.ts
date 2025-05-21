import { UserMother } from '../../../../../tests/user/mothers/UserMother';
import { InMemoryUserRepository } from '../../infrastructure/InMemoryUserRepository';
import { GetAllUsersCase } from '../getAllUsers';

describe('GetAllUsersCase', () => {
  it('should return all users from repository', async () => {
    const repo = new InMemoryUserRepository();

    const user1 = UserMother.create({ id: 'id-1' });
    const user2 = UserMother.create({ id: 'id-2' });

    await repo.addUser(user1);
    await repo.addUser(user2);

    const useCase = new GetAllUsersCase(repo);
    const users = await useCase.execute();

    expect(users).toHaveLength(2);
    expect(users.map((u) => u.getId())).toEqual(['id-1', 'id-2']);
  });
});
