"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader, SidebarMenu, SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    ScanBarcode,
    Settings2, ShoppingBag, SquareActivity, WalletCards
} from "lucide-react"

import {NavMain} from "@/components/nav-main";
import {NavUser} from "@/components/nav-user";

export function AppSidebar() {
    // get current url and set active menu item
    const currentUrl = window.location.pathname;


    // This is sample data.
    const items = {
        user: {
            name: "shadcn",
            email: "m@example.com",
            avatar: "/avatars/shadcn.jpg",
        },
        navMain: [
            {
                title: "Sales Orders",
                url: "#",
                icon: ShoppingBag,
                isActive: true,
                items: [
                    {
                        title: "New Entry",
                        url: "#",
                    },
                    {
                        title: "All Entries",
                        url: "#",
                    }
                ],
            },
            {
                title: "Purchase Orders",
                url: "#",
                icon: WalletCards,
                isActive: false,
                items: [
                    {
                        title: "New Entry",
                        url: "#",
                    },
                    {
                        title: "All Entries",
                        url: "#",
                    }
                ],
            },
            {
                title: "Stock Management",
                url: "#",
                icon: SquareActivity,
                isActive: false,
                items: [
                    {
                        title: "Movement",
                        url: "#",
                    },
                    {
                        title: "Adjustment",
                        url: "#",
                    }
                ],
            },
            {
                title: "Products Management",
                url: "#",
                icon: ScanBarcode,
                isActive: ["/admin/categories", "/admin/tags", "/admin/products"].includes(currentUrl),
                items: [
                    {
                        title: "Categories",
                        url: "/admin/categories",
                        isActive: currentUrl === "/admin/categories",
                    },
                    {
                        title: "Tags",
                        url: "/admin/tags",
                        isActive: currentUrl === "/admin/tags",
                    },
                    {
                        title: "Products",
                        url: "/admin/products",
                        isActive: currentUrl === "/admin/products",
                    }
                ],
            },
            {
                title: "Settings",
                url: "#",
                icon: Settings2,
                items: [
                    {
                        title: "User Manegement",
                        url: "#",
                    },
                    {
                        title: "Roles",
                        url: "#",
                    },
                    {
                        title: "Permissions",
                        url: "#",
                    },
                ],
            },
        ]
    }
    return (
        <Sidebar variant={"sidebar"} collapsible={"icon"}>
            <SidebarHeader>
                <SidebarMenu className={'p-4'}>
                    <SidebarMenuItem>
                        <img alt={"Logo"} src={"/logo.png"} className={'h-5'}/>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={items.navMain}/>
                <SidebarGroup/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={items.user}/>
            </SidebarFooter>
        </Sidebar>
    )
}
