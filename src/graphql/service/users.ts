import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User, Prisma } from '@prisma/client';
import * as gql from '../type';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<gql.User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    }).then((user) => this.convertToGraphQLType(user));
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<gql.User | null> {
    return this.prisma.user.create({
      data,
    }).then((user) => this.convertToGraphQLType(user));
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  convertToGraphQLType(user: User): gql.User {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
