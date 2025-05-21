import User from '../User';

import { UserMother } from '../../../../../../tests/user/mothers/UserMother';

describe('User', () => {
  test('should throw an error if name is empty', () => {
    expect(() =>
      UserMother.create({
        id: User.randomId(),
        name: '',
      }),
    ).toThrow('Name is required');
  });

  test('should return true for equal Users (by id)', () => {
    const sharedId = User.randomId();

    const user1 = UserMother.create({ id: sharedId });
    const user2 = UserMother.create({ id: sharedId });

    expect(user1.equals(user2)).toBe(true);
  });

  test('should return false for Users with different ids', () => {
    const user1 = UserMother.create({ id: User.randomId() });
    const user2 = UserMother.create({ id: User.randomId() });

    expect(user1.equals(user2)).toBe(false);
  });
});
