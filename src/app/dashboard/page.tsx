import TaskDashboard from "@/components/task-dashboard/task-dashboard";

export default function TaskDashboardPage() {
    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-8">
                <TaskDashboard />
            </div>
        </main>
    );
}
