
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    id: number;
    email: string;
    name: string;
    posts?: Nullable<Nullable<Post>[]>;
}

export interface Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
    author: User;
}

export interface IQuery {
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(name: string, email: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
