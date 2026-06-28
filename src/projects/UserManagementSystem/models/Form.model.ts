import type { User } from "./User.model";

export type Action = "add" | "edit"

export interface FormState {
    showForm: boolean;
    currentAction: Action;
    formData: User;
}
