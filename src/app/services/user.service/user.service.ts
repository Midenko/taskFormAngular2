import { Injectable } from "@angular/core";

import { User } from "./user";
import { USERS } from "./users";

@Injectable()
export class UserService {
    lastName: string;

    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getUser(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }

    addUser(userData: any): void {
        let user = new User();
        user.id = USERS.length + 1;
        let {name, login, email, password} = userData;
        user.name = name;
        user.login = login;
        user.email = email;
        user.password = password;
        USERS.push(user);
    }
}