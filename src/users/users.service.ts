import { Injectable } from '@nestjs/common';
import { allUsers, User } from 'src/Utils/usersData';
import { CreateUserDTO } from './DTO/createUser.dto';
import { UpdateUserDto } from './DTO/updateUser.dto';

@Injectable()
export class UsersService {
  private users: User[] = [...allUsers];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((us) => us.id === id);
  }

  addUser(user: CreateUserDTO) {
    const newUser: User = {
      id: this.users.length + 1,
      ...user,
    };
    return this.users.push(newUser);
  }

  updateUserById(id: number, newUserData: UpdateUserDto): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      return undefined;
    }

    this.users[index] = {
      ...this.users[index],
      ...newUserData,
    };

    return this.users[index];
  }

  deleteUserById(id: number) {
    this.users = this.users.filter((us) => us.id !== id);
    return this.users;
  }
}
