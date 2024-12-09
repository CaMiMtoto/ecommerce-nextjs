import {ReactNode} from "react";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {ChevronRight} from "lucide-react";

// Define the breadcrumb structure type
interface BreadcrumbType {
    label: string;
    href?: string;
}

interface LayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbType[]; // Optional breadcrumbs prop
}

export default function AdminLayout({children, breadcrumbs = []}: LayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header
                    className="flex h-16 shrink-0 items-center border-b gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1"/>
                        <Separator orientation="vertical" className="mr-2 h-4"/>
                        <Breadcrumb>
                            <BreadcrumbList>
                                {/* Home link */}
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/dashboard">
                                        Dashboard
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>

                                {/* Manually passed breadcrumb items */}
                                {breadcrumbs.map((breadcrumb, index) => (
                                    <BreadcrumbItem key={index}>
                                        {
                                            breadcrumb.href ?
                                                <BreadcrumbLink href={breadcrumb.href}>
                                                    {breadcrumb.label}
                                                </BreadcrumbLink> :
                                                <span>{breadcrumb.label}</span>
                                        }
                                        {index < breadcrumbs.length - 1 && (
                                            <ChevronRight className="inline h-3.5 w-3.5 text-gray-500"/>
                                        )}
                                    </BreadcrumbItem>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 ">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
