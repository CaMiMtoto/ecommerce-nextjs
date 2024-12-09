import AdminLayout from "@/components/layouts/admin-layout";


export default function DashboardPage() {
    // Define breadcrumb items for this page
    const breadcrumbs = [
        { label: "Analytics" }
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <h4>
                Dashboard
            </h4>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </AdminLayout>
    );
}
