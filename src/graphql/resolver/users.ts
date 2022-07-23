import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { UserService } from '../service/users';

@Resolver('User')
export class UsersResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query()
  async user(@Args('id') id: number) {
    return this.userService.user({ id });
  }

  @Mutation()
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
  ) {
    console.log(name);
    console.log(email);
    return this.userService.createUser({ name, email });
  }
}
