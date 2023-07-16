"use strict";

class UserStorage{
    static #users={
        id:["asdf","이","박"],
        psword:['1234','1234','3124'],
        name:['이','한','주'],
    };

    static getUsers(...fields){
        const users = this.#users
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}


module.exports = UserStorage;