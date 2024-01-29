

export class User {
  constructor(
    public userId: number,
    public firstName: string,
    public lastName: string,
    public username: string,
    public password: string,
    public email: string,
    public isActive: boolean,
    public isNotLocked: boolean
  ){}


}