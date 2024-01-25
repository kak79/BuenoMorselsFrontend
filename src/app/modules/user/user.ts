

export class User {
  constructor(
    public userId: number,
    public firstName: string,
    public lastName: string,
    public password: string,
    public email: string,
    public isActive: boolean,
    public isNotLocked: boolean
  ){}


}