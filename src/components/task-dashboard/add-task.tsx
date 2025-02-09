"use client"

import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import CreateTaskModal from "./create-task-modal";

export default function AddTask() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addTask = () => {};

    return (
        <div>
            <Button onClick={() => setIsModalOpen(true)}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Task
            </Button>
            <CreateTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddTask={addTask}
            />
        </div>
    );
}
