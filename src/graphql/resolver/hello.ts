import { Query, Resolver } from '@nestjs/graphql';

@Resolver("Hello")
export class HelloResolver {
  @Query()
  async hello() {
    return "Hello, World"
  }
}
