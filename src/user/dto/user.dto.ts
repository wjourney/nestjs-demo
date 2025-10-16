export class CreateUserDto {
  username: string;
  email: string;
  password: string;
  age?: number;
}

export class UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
  age?: number;
}
