import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma.service';
import { HelloResolver } from './graphql/resolver/hello';
import { UsersResolver } from './graphql/resolver/users';
import { UserService as PrismaUserService } from './graphql/service/users';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [PrismaService, PrismaUserService, HelloResolver, UsersResolver],
})
export class AppModule {}
