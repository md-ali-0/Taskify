"use client";

import { useState } from "react";
import AddTask from "./add-task";
import TaskCard from "./task-card";

const initialTasks = [
    {
        id: 1,
        title: "Complete project proposal",
        status: "In Progress",
        dueDate: "2025-02-15",
        priority: "High",
    },
    {
        id: 2,
        title: "Review team performance",
        status: "To Do",
        dueDate: "2025-02-20",
        priority: "Medium",
    },
    {
        id: 3,
        title: "Prepare for client meeting",
        status: "Done",
        dueDate: "2025-02-10",
        priority: "High",
    },
    {
        id: 4,
        title: "Update documentation",
        status: "In Progress",
        dueDate: "2025-02-18",
        priority: "Low",
    },
];

export default function TaskDashboard() {
    const [tasks, setTasks] = useState(initialTasks);


    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Task Dashboard
                </h1>
                <AddTask/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>

        </div>
    );
}
