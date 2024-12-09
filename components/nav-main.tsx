"use client"

import {ChevronRight, GaugeCircle, type LucideIcon} from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link";

export function NavMain({items}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string,
            isActive?: boolean
        }[]
    }[]
}) {

    return (
        <SidebarGroup>
            {/*    <SidebarGroupLabel>
                Main Navigation
            </SidebarGroupLabel>*/}
            <SidebarMenu className={'gap-y-3'}>
                <SidebarMenuItem>
                    <Link href={'/admin/dashboard'}>
                        <SidebarMenuButton>
                            <GaugeCircle/>
                            <span>Dashboard</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                {items.map((item) => {
                    // const isActive = currentUrl === item.url || (item.items && item.items.some(subItem => currentUrl === subItem.url));

                    return (

                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={item.isActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton
                                        tooltip={item.title}>
                                        {item.icon && <item.icon/>}
                                        <span>{item.title}</span>
                                        <ChevronRight
                                            className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => {

                                            return (
                                                <SidebarMenuSubItem key={subItem.title}
                                                                    className={`${subItem.isActive ? "bg-gray-200 rounded-md text-black" : ""}`}>
                                                    <SidebarMenuSubButton asChild>
                                                        <Link href={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            );
                                        })}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}
