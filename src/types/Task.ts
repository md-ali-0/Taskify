export type Task = {
    id: string;
    title: string;
    status: TaskStatus;
    date: Date;
    priority: TaskPriority;
    createdAt: Date;
    updatedAt: Date;
};

enum TaskStatus {
    TODO,
    InPROGRESS,
    DONE,
}

enum TaskPriority {
    LOW,
    MEDIUM,
    HIGH,
}
