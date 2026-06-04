
export type UsersTypes = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    username: string;
    password: string;
    birthdate: string
    image: string;
    bloodGroup: string
}
export interface UserTypeDTO {
      users: UsersTypes[]
}