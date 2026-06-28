export type Gender = "Male" | "Female"

export interface User {
    fullName: string;
    email: string;
    contact: string;
    gender: Gender;
    userId: number;
}
