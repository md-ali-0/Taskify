import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function TaskCard({ task }) {
    const getPriorityColor = (priority) => {
        switch (priority.toLowerCase()) {
            case "high":
                return "bg-red-500";
            case "medium":
                return "bg-yellow-500";
            case "low":
                return "bg-green-500";
            default:
                return "bg-blue-500";
        }
    };

    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case "done":
                return <CheckCircle2 className="h-5 w-5 text-green-500" />;
            case "in progress":
                return <Clock className="h-5 w-5 text-yellow-500" />;
            default:
                return <AlertCircle className="h-5 w-5 text-red-500" />;
        }
    };

    return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {task.title}
                </CardTitle>
                <Badge
                    className={`${getPriorityColor(task.priority)} text-white`}
                >
                    {task.priority}
                </Badge>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    {getStatusIcon(task.status)}
                    <span>{task.status}</span>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                    Due: {task.dueDate}
                </div>
                <Button variant="outline" size="sm">
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}
