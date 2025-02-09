import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const tasks = [
    {
        id: "TASK-8782",
        title: "You can't compress the program without quantifying the open-source SSD pixel!",
        status: "in progress",
        priority: "high",
        dueDate: "2023-09-11",
    },
    {
        id: "TASK-7878",
        title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
        status: "completed",
        priority: "medium",
        dueDate: "2023-09-09",
    },
    {
        id: "TASK-7839",
        title: "We need to bypass the neural TCP card!",
        status: "completed",
        priority: "low",
        dueDate: "2023-09-07",
    },
    {
        id: "TASK-5562",
        title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
        status: "in progress",
        priority: "high",
        dueDate: "2023-09-14",
    },
    {
        id: "TASK-8686",
        title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
        status: "completed",
        priority: "medium",
        dueDate: "2023-09-03",
    },
];

export function RecentTasks() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Task ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead className="text-right">Due Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task) => (
                    <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.id}</TableCell>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>
                            <Badge
                                variant={
                                    task.status === "completed"
                                        ? "success"
                                        : "default"
                                }
                            >
                                {task.status}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <Badge
                                variant={
                                    task.priority === "high"
                                        ? "destructive"
                                        : task.priority === "medium"
                                        ? "warning"
                                        : "secondary"
                                }
                            >
                                {task.priority}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            {task.dueDate}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
