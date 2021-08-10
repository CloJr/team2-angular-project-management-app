export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
    completed: boolean;
    category: string;
}