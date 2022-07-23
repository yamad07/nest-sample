
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
    id: number;
    email: string;
    name: string;
    posts?: Nullable<Nullable<Post>[]>;
}

export class Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
    author: User;
}

export abstract class IQuery {
    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(name: string, email: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
